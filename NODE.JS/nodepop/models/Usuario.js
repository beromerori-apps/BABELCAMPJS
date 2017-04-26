'use strict';

const mongoose = require('mongoose');

// Creamos el schema Usuario
const usuarioSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        index: true
    },
    password: String
});

// Creamos el modelo de Anuncio
mongoose.model('Usuario', usuarioSchema);