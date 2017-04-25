'use strict';

const mongoose = require('mongoose');

// Nos conectamos a la BBDD
require('./connectMongoose');

require('../models/Anuncio');

const Anuncio = mongoose.model('Anuncio');

const anuncio = new Anuncio ({title: "A", price: 10});

/*anuncio.save(function(err, anuncioCreado) {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log('Anuncio ' + anuncioCreado.title + ' creado');
});*/

Anuncio.remove({}, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log('Collection anuncios dropped');
});

