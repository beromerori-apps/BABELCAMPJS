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
var contactos_service_1 = require("../servicios/contactos.service");
var router_1 = require("@angular/router");
var MisContactosComponent = (function () {
    function MisContactosComponent(_contactosService, _activatedRoute) {
        this._contactosService = _contactosService;
        this._activatedRoute = _activatedRoute;
    }
    MisContactosComponent.prototype.ngOnInit = function () {
        /*this._activatedRoute.data.forEach((data: any) => {
            this.listaContactos = data.contactos;
        })*/
        var _this = this;
        // Otra forma
        this._activatedRoute.data.forEach(function (data) {
            return _this.listaContactos = data.contactos;
        });
        /*this._contactosService.obtenerContactos()
                            .subscribe(contactos => {
                                this.listaContactos = contactos;
                                //console.log(this.listaContactos);
                            });*/
    };
    MisContactosComponent.prototype.mostrarDestalles = function (contacto) {
        this.contactoSeleccionado = contacto;
    };
    MisContactosComponent.prototype.navegarRuta = function (ruta) {
        window.open(ruta, '_blank');
    };
    return MisContactosComponent;
}());
MisContactosComponent = __decorate([
    core_1.Component({
        templateUrl: './mis-contactos.component.html'
    }),
    __metadata("design:paramtypes", [contactos_service_1.ContactosService,
        router_1.ActivatedRoute])
], MisContactosComponent);
exports.MisContactosComponent = MisContactosComponent;
//# sourceMappingURL=mis-contactos.component.js.map