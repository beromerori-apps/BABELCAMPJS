'use strict';

function Persona(nombre) {
    this.nombre = nombre;
}

const persona = new Persona('Neo');

Persona.prototype.saluda = function() {
    console.log('Hola me llamo ', this.nombre);
};

persona.saluda();
