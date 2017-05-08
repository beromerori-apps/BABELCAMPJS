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
var contactos_service_1 = require("./servicios/contactos.service");
var AppComponent = (function () {
    function AppComponent(_contactosService) {
        this._contactosService = _contactosService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contactosService.obtenerContactos()
            .subscribe(function (contactos) {
            _this.listaContactos = contactos;
            //console.log(this.listaContactos);
        });
    };
    AppComponent.prototype.mostrarDestalles = function (contacto) {
        //console.log('Contacto seleccionado: ', contacto);
        this.contactoSeleccionado = contacto;
    };
    AppComponent.prototype.navegarRuta = function (ruta) {
        window.open(ruta, '_blank');
    };
    AppComponent.prototype.guardarContacto = function (contacto) {
        var _this = this;
        this._contactosService.guardarContacto(contacto)
            .subscribe(function (contacto) {
            _this.listaContactos.push(contacto);
            console.log("Añadidio contacto: ", contacto);
            console.log(_this.listaContactos);
        });
        /*console.log(contacto);
        this._contactosService.guardarContacto(contacto);
        console.log(this.listaContactos);*/
        //this._contactosService.guardarContacto(contacto);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
    }),
    __metadata("design:paramtypes", [contactos_service_1.ContactosService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map