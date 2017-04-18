'use strict';

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

function suenaTelefono() {
    console.log('ring ring');
}

function vibrarTelefono() {
    console.log('brr brr');
}

eventEmitter.on('llamar telefono', suenaTelefono); // No va con parentesis porque no queremos que se ejecute en este momento
eventEmitter.on('llamar telefono', vibrarTelefono);

eventEmitter.emit('llamar telefono');

eventEmitter.emit('llamar telefono', 'madre');
