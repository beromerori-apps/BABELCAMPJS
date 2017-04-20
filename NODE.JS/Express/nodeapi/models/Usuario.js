'use strict';

const mongoose = require('mongoose');

// Creamos un esquema
const usuarioSchema = mongoose.Schema({
    email: String,
    clave: { 
        type: String,
        unique: true
    },
});

mongoose.model('Usuario', usuarioSchema);