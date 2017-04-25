'use strict';

const mongoose = require('mongoose');

// Creamos el schema Anuncio
const anuncioSchema = mongoose.Schema({
    title: String,
    sale: Boolean,
    price: Number,
    image: String,
    tags: [String]
});

// Creamos el modelo de Anuncio
mongoose.model('Anuncio', anuncioSchema);