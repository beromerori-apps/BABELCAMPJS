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
anuncioSchema.statics.list = function (criterios, callback) {

    const query = Anuncio.find(criterios);

    // Añado paginacion, ordenacion, ...

    //query.start(start);
    //query.limit(limit);
    //query.sort(sort);
    //query.includeTotal(includeTotal);
    //query.token(token);

    // Ejecuto la query
    query.exec(callback);
}

// Creamos el modelo de Anuncio
var Anuncio = mongoose.model('Anuncio', anuncioSchema);