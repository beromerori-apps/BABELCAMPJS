'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const jwt = require('jsonWebToken');
const config = require('../../config');

const Usuario = mongoose.model('Usuario');
//require('../models/Usuario');

// POST /api/usuarios/registry
router.post('/registry', (req, res, next) => {

    // Recibimos datos del nuevo usuario
    const datosUsuario = req.body;
   
    // Creo instancia de Usuario
    const usuario = new Usuario(datosUsuario);  

    usuario.save((err, nuevoUsuario) => {
        if(err) {
            next(err);
            return;
        }
        res.json({ success: true, result: nuevoUsuario });
    });
});

// POST /api/usuarios/login
router.post('/login', (req, res, next) => {

    // Recibimos las credenciales
    const email = req.body.email;
    const password = req.body.password;

    Usuario.findOne({email: email}).exec((err, usuario) => {

        if(err) {
            next(err);
            return;
        }

        // Si el usuario === null (NO existe)

        if(!usuario) {
            res.json({ success: false, error: 'Credenciales incorrectas' });
            return;
        }

        // Si la password es incorrecta

        if(password !== usuario.password) {
            res.json({ success: false, error: 'Credenciales incorrectas' });
            return;    
        }

        // Si el usuario esta registrado, se le devuelve un token
        
        jwt.sign({usuario_id : usuario._id}, config.jwtSecret, config.jwtConfig, (err, token) => {
            if(err) {
                next(err);
                return;
            }
            res.json({success: true, token: token});
        });
    });
});

// GET /api/usuarios
router.get('/', (req, res, next) => {

    Usuario.find((err, usuarios) => {
        if(err) {
            next(err);
            return;
        }
        res.json({ success: true, result: usuarios });
    });
});

module.exports = router;

