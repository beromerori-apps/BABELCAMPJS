'use strict';

const basicAuth = require('basic-auth');

// Este modulo exporta una funcion que recibe usaurio y password
module.exports = (usuario, password) => {

// La funcion devuelve un middleware de autenticacion
return (req, res, next) => {
    // Pedimos a basicAuth que intente sacar credenciales
    const user = basicAuth(req);
    console.log({user});
    if(!user || user.name !== usuario || user.pass !== password) {
        // Si no tengo credenciales, respuesta con cabecera pidiendolas
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        res.send(401);
        return;
    }
    next();
    };
};