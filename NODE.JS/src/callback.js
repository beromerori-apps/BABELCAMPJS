'use strict';

function suma(a, b, callback) {
    const resultado = a + b;
    setTimeout(function() {
        const resultado = a + b; //Esto no se ejecutara hasta que pasen los 2000 ms
        callback(resultado);
    }, 2000);
}

suma(4, 7, function(res) {
    console.log(res);
});

console.log('fin');
