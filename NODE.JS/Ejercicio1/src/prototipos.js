'use strict';

function Persona(nombre) {
    this.nombre = nombre;
}

const persona = new Persona('Neo');

Persona.prototype.saluda = function() {
    console.log('Hola me llamo ', this.nombre);
};

persona.saluda();

// ------ HERENCIA


function Agente(nombre) {
    Persona.call(this, nombre);
    //Esto ejecuta el constructor de Persona con el this de Agente
}

// asignamos como prototipo una persona
Agente.prototype = new Persona('soy un prototipo');

const agente = new Agente('Smith');

agente.saluda();

// ------ HERENCIA MULTIPLE

function Superheroe() {
    this.vuela = function() {
        console.log(this.nombre, 'vuela');
    };
    this.esquivaBalas = function() {
        console.log(this.nombre, 'esquiva balas');
    };
}

// Asignar todas las propiedades (y metodos) de un Superheroe al prototipo de Agente
