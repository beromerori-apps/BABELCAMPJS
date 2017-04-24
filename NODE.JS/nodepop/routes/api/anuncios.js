'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

// Le pedimos a mongoose el modelo de Anuncio
const Anuncio = mongoose.model('Anuncio');

// GET /api/anuncios
router.get('/', (req, res, next) => {

    Anuncio.find((err, anuncios) => {
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

// POST /api/anuncios
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