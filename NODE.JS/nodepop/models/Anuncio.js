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

// Creamos metodo estatico en el modelo Anuncio para realizar las busquedas con filtros
anuncioSchema.statics.list = function(criterios, skip, limit, returnTotal, callback) {

    const query = Anuncio.find(criterios);
    
    // Paginacion
    query.skip(skip);
    query.limit(limit);
    //query.returnTotal(returnTotal);

    query.exec(callback);
}

anuncioSchema.statics.allTags = function() {
    return ['work', 'lifestyle', 'motor', 'mobile'];
}

// Creamos el modelo de Anuncio
var Anuncio = mongoose.model('Anuncio', anuncioSchema);
//mongoose.model('Anuncio', anuncioSchema);
