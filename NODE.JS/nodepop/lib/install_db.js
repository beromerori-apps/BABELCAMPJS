'use strict';

const fs = require('fs');

function leerFichero(callback) {

    console.log('leerFichero.js');

    const fichero = '../anuncios.js';
    
    fs.readFile(fichero, 'utf-8', function(err, datos) {
        if(err) {
            callback(err);
            return;
        }
        const anuncios = JSON.parse(datos);
        console.log(datos);
        callback(null, datos);
    });
}

module.exports = leerFichero;