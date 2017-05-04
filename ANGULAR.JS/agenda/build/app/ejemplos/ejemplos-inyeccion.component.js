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
// Inyeccion de dependencia usando decorador
var Servicio1 = (function () {
    function Servicio1() {
    }
    Servicio1.prototype.obtenerMensaje = function () { return 'Soy un servicio decorado con @Injectable'; };
    return Servicio1;
}());
Servicio1 = __decorate([
    core_1.Injectable()
], Servicio1);
exports.Servicio1 = Servicio1;
var Servicio2 = (function () {
    function Servicio2() {
    }
    Servicio2.prototype.obtenerMensaje = function () { return 'Soy un servicio que usa proveedor de clase'; };
    return Servicio2;
}());
exports.Servicio2 = Servicio2;
exports.Servicio2Provider = {
    provide: Servicio2,
    useClass: Servicio2
};
var EjemplosInyeccionComponent = (function () {
    function EjemplosInyeccionComponent(_servicio1, _servicio2) {
        this._servicio1 = _servicio1;
        this._servicio2 = _servicio2;
    }
    EjemplosInyeccionComponent.prototype.ngOnInit = function () {
        this.mensaje1 = this._servicio1.obtenerMensaje();
        this.mensaje2 = this._servicio2.obtenerMensaje();
    };
    return EjemplosInyeccionComponent;
}());
EjemplosInyeccionComponent = __decorate([
    core_1.Component({
        selector: 'ejemplos-inyeccion',
        templateUrl: '/app/ejemplos/ejemplos-inyeccion.component.html'
    }),
    __metadata("design:paramtypes", [Servicio1, Servicio2])
], EjemplosInyeccionComponent);
exports.EjemplosInyeccionComponent = EjemplosInyeccionComponent;
//# sourceMappingURL=ejemplos-inyeccion.component.js.map