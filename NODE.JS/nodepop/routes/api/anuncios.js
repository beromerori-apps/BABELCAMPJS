'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

// Le pedimos a mongoose el modelo de Anuncio
const Anuncio = mongoose.model('Anuncio');

const jwtAuth = require('../../lib/jwtAuth');
router.use(jwtAuth);

// GET /api/anuncios
router.get('/', (req, res, next) => {

    console.log('Usuario autenticado con _id: ', req.usuario_id);

    // Recogemos parametros de busqueda
    const tag = req.query.tag; // Busqueda por tag
    const type = req.query.venta; // Busqueda por tipo de anuncio (venta o busqueda)
    const title = req.query.nombre; // Busqueda por nombre del anuncio
    let precio = req.query.precio; // Busqueda por rango de precio

    const criterios = {};

    if(tag) {
        criterios.tags = tag;
    }

    if(type) {
        criterios.sale = type;
    }

    if(title) {
        criterios.title = new RegExp(title, "i");
    }

    if(precio) {
        
        precio = precio.split('-');
        
        // Ej: precio=10
        if(precio.length === 1) {
            precio = parseInt(precio[0]);
            criterios.price = precio;
        }
        else {

            // Ej: precio=-10
            if(precio[0] === '') {
                precio = parseInt(precio[1]);
                criterios.price = {$lte: precio};
            }

            // Ej: precio=10-
            else if(precio[precio.length-1] === '') {
                precio = parseInt(precio[0]);
                criterios.price = {$gte: precio};
            }

            // Ej: precio=10-50
            else {
                let precio1 = parseInt(precio[0]);
                let precio2 = parseInt(precio[precio.length-1]);
                criterios.price = {$gte: precio1, $lte: precio2};
            }
        }
    }

    // Paginacion
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    const returnTotal = req.query.returnTotal;
    

    Anuncio.list(criterios, skip, limit, returnTotal, (err, anuncios) => {
        if(err) {
            next(err);
            return;
        }
        res.json({ success: true, result: anuncios });
    });
    
});

// GET /api/anuncios/:id
router.get('/:id', (req, res, next) => {

    const _id = req.params.id;

    Anuncio.findOne({_id: _id}).exec((err, anuncio) => {
        if(err) {
            next(err);
            return;
        }
        res.json({ success: true, result: anuncio });
    });
});

// POST /api/anuncios -> NO HAY QUE HACERLO
router.post('/', (req, res, next) => {

    const datosAnuncio = req.body;

    // Creo instancia de anuncio
    const anuncio = new Anuncio(datosAnuncio);

    // La guardo en BBDD
    anuncio.save((err, anuncioGuardado) => {
        if(err) {
            next(err);
            return;
        }
        res.json({ success: true, result: anuncioGuardado });
    });
});

// PUT /api/anuncios/:id
router.put('/:id', (req, res, next) => {

    const _id = req.params.id;
    const datosAnuncio = req.body;

    Anuncio.update({_id: _id}, datosAnuncio, (err) => {
        if(err) {
            next(err);
            return;
        }
        res.json({success: true});
    });
});

// DELETE /api/anuncios/:id
router.delete('/:id', (req, res, next) => {
    const _id = req.params.id;

    Anuncio.remove({_id: _id}, err => {
        if(err) {
            next(err);
            return;
        }
        res.json({ success: true });
    });
});

module.exports = router;