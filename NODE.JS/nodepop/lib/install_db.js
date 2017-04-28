'use strict';

const fs = require('fs');
const mongoose = require('mongoose');

// Nos conectamos a la BBDD
require('./connectMongoose');

// Cargamos los modelos
require('../models/Anuncio');
require('../models/Usuario');

// Le pedimos a mongoose el modelo de Anuncio
const Anuncio = mongoose.model('Anuncio');
const Usuario = mongoose.model('Usuario');


function leerFichero(callback) {

    const fichero = './anuncios.json';
    
    fs.readFile(fichero, 'utf-8', function(err, datos) {
        if(err) {
            callback(err);
            return;
        }
        const anuncios = JSON.parse(datos);
        callback(null, anuncios);
    });
}

// Se borran las tablas de anuncios y usuarios de la BBDD

Anuncio.remove({}, function(err) {
    if(err) {
         console.log('Error', err);
         return;
     }
     console.log('Collection anuncios dropped');
 });

 Usuario.remove({}, function(err) {
    if(err) {
         console.log('Error', err);
         return;
     }
     console.log('Collection usuarios dropped');
 });

leerFichero((err, data) => {
    
    if(err) {
        console.log(err);
        return;
    }

    data.anuncios.forEach(function(anuncio) {
        const a = new Anuncio(anuncio);
        a.save(function(err, anuncioNuevo) {
            if(err) {
                console.log(err);
                return;
            }
            console.log(anuncioNuevo);
        });
    });

    data.usuarios.forEach(function(usuario) { // Hacerlo con async.concat
        const u = new Usuario(usuario);
        u.save(function(err, usuarioNuevo) {
            if(err) {
                console.log(err);
                return;
            }
            console.log(usuarioNuevo);
        });
    });    
});

module.exports = leerFichero;