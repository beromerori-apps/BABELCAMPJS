'use strict';

const mongoose = require('mongoose');

// Creamos un esquema
const agenteSchema = mongoose.Schema({
    name: String,
    age: { 
        type: Number,
        index: true
    }
});

// Creamos metodo estatico en el modelo para recuperar lista de agentes con filtros
agenteSchema.statics.list = function(criterios, limit, skip, select, sort, callback) {
    const query = Agente.find(criterios); // Aqui usamos el var Agente de abajo
    
    // Añado limite
    query.limit(limit);
    query.skip(skip);
    query.select(select);
    query.sort(sort);

    // Ejecuto la query
    query.exec(callback); 
}

// Creamos el modelo de Agente

/* Utilizamos var para poder usar el hoisting 
 * y asi Agente pueda ser utilizado mas arriba.
 * Si hubieramos utilizado const  no hubieramos podido*/

var Agente = mongoose.model('Agente', agenteSchema); 

// Para evitar la pluralizacion podemos definir el nombre ed la colecction
//mongoose.model('Agente', agenteSchema, {'collection' : 'zzzzz'});

// No necesitamos exportar el modelo porque podemos recuperarlo donde queramos con mongoose.model('Agente');