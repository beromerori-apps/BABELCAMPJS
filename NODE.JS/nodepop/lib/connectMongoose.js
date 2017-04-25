'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const conn = mongoose.connection;

conn.on('err', err => {
    console.log('Error en la conexion', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('Conectado a MongoDB.');
});

// Realizamos la conexion
mongoose.connect('mongodb://localhost/nodepop');

// No necesitamos exportar la conexion, ya que mongoose la exporta por nosotros