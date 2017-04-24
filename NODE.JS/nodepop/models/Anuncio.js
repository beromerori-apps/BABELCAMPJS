'use strict';

const mongoose = require('mongoose');

// Cremaos un esquema
const anuncioSchema = mongoose.Schema({

    title: String,
    type: String,
    price: Number,
    image: String,
    tags: []
});

// Creamos el modelo de Anuncio
mongoose.model('Anuncio', anuncioSchema);