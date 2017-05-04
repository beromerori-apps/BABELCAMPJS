"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var CajaComponent = (function () {
    function CajaComponent() {
        // Recibimos color como parametro de entrada al componente
        this.color = 'green';
        // Definimos un emisor de eventos al padre
        this.encima = new core_1.EventEmitter(); // Lo que vamos a emitir es de tipo string
    }
    // Emitimos un evento al padre
    CajaComponent.prototype.notificar = function () {
        //console.log('Raton encima');
        this.encima.emit("El color de la caja es: " + this.color);
    };
    return CajaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CajaComponent.prototype, "color", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CajaComponent.prototype, "encima", void 0);
CajaComponent = __decorate([
    core_1.Component({
        selector: 'caja',
        template: "\n        <div [style.backgroundColor]=\"color\"\n            (mouseenter)=\"notificar()\"></div>",
        styles: ["\n        div {\n            width: 100px;\n            height: 100px;\n        }\n    "]
    })
], CajaComponent);
exports.CajaComponent = CajaComponent;
//# sourceMappingURL=caja.component.js.map