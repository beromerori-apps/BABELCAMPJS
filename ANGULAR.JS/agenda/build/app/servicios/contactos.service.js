"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ContactosService = (function () {
    function ContactosService() {
    }
    ContactosService.prototype.obtenerContactos = function () {
        return [
            {
                nombre: 'Steve Jobs',
                email: 'steve.jobs@apple.com',
                telefono: '123456789'
            },
            {
                nombre: 'Bill Gates',
                email: 'bill.gates@microsoft.com',
                telefono: '987654321'
            },
            {
                nombre: 'Elon Musk',
                email: 'elon.musk@tesla.com',
                telefono: '159753852'
            }
        ];
    };
    return ContactosService;
}());
ContactosService = __decorate([
    core_1.Injectable()
], ContactosService);
exports.ContactosService = ContactosService;
//# sourceMappingURL=contactos.service.js.map