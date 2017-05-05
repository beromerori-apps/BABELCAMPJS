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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var contacto_1 = require("../entidades/contacto");
var ContactosService = (function () {
    function ContactosService(_http) {
        this._http = _http;
    }
    ContactosService.prototype.obtenerContactos = function () {
        return this._http
            .get('http://localhost:3004/contactos')
            .map(function (res) {
            // Obtengo la lista de objetos que viene en el body
            var lista = res.json();
            // Creo una lista de contactos y la devuelvo
            return lista.map(function (elemento) {
                return contacto_1.Contacto.desdeJSON(elemento); // Transformo cada elemento de la lista en un contacto
            });
        });
    };
    ContactosService.prototype.guardarContacto = function (contacto) {
        return this._http
            .post('http://localhost:3004/contactos', contacto)
            .map(function (res) { return contacto_1.Contacto.desdeJSON(res.json()); });
    };
    return ContactosService;
}());
ContactosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContactosService);
exports.ContactosService = ContactosService;
//# sourceMappingURL=contactos.service.js.map