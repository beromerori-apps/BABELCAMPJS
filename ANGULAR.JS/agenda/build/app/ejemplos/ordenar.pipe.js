"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var OrdenarPipe = (function () {
    function OrdenarPipe() {
    }
    // Con 'transform' creamos un nuevo dato y lo retornamos
    // no alteramos el original
    OrdenarPipe.prototype.transform = function (contactos) {
        contactos.sort(function (contacto1, contacto2) {
            var nombreCompleto1 = contacto1.nombre + " " + contacto1.apellidos;
            var nombreCompleto2 = contacto2.nombre + " " + contacto2.apellidos;
            // Si el primero es mayor que el segundo devolvemos 1            
            if (nombreCompleto1 > nombreCompleto2)
                return 1;
            // Si el primero es menor que el segundo devolvemos -1            
            if (nombreCompleto1 < nombreCompleto2)
                return -1;
            else
                return 0;
        });
        return contactos;
    };
    return OrdenarPipe;
}());
OrdenarPipe = __decorate([
    core_1.Pipe({ name: 'ordenar' })
], OrdenarPipe);
exports.OrdenarPipe = OrdenarPipe;
//# sourceMappingURL=ordenar.pipe.js.map