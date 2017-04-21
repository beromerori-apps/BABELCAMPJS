'use strict';

console.log('Inicializo la calculadora...');

exports.suma = function(a, b) {
    return a + b;
}

exports.resta = function(a, b) {
    return a - b;
}

/*function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}*/

/*module.exports = {
    suma: suma,
    resta: resta
};*/

// Otra forma de hacerlo

/*module.exports.suma = function(a, b) {
    return a + b;
}

module.exports.resta = function(a, b) {
    return a - b;
}*/
