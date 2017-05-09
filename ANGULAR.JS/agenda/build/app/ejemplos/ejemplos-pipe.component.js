"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EjemplosPipeComponent = (function () {
    function EjemplosPipeComponent() {
        this.fecha = new Date();
        this.precio = 34.95;
        this.texto = 'texto que estaba en minuscula';
        this.objeto = {
            selector: 'aaa',
            zzz: 222,
            fecha: new Date()
        };
    }
    return EjemplosPipeComponent;
}());
EjemplosPipeComponent = __decorate([
    core_1.Component({
        selector: 'ejemplos-pipe',
        template: "\n        <div>\n            <strong>Pipa de fecha: </strong> {{ fecha | date:'dd/MM/yyyy' }}<br>\n            <strong>Pipa de moneda: </strong> {{ precio | currency: 'EUR' }}<br>\n            <strong>Pipa de texto: </strong> {{ texto | titlecase }}<br>\n            <strong>Pipa de json: </strong> <pre>{{ objeto | json }}</pre>\n        </div>\n    "
    })
], EjemplosPipeComponent);
exports.EjemplosPipeComponent = EjemplosPipeComponent;
//# sourceMappingURL=ejemplos-pipe.component.js.map