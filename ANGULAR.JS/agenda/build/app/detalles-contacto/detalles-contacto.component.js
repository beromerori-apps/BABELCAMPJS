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
var contacto_1 = require("../entidades/contacto");
var DetallesContactoComponent = (function () {
    function DetallesContactoComponent() {
        this.verFacebook = new core_1.EventEmitter();
        this.verTwitter = new core_1.EventEmitter();
    }
    DetallesContactoComponent.prototype.notificarFacebook = function () {
        this.verFacebook.emit(this.contacto.generarRutaFacebook());
    };
    DetallesContactoComponent.prototype.notificarTwitter = function () {
        this.verTwitter.emit(this.contacto.generarRutaTwitter());
    };
    return DetallesContactoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", contacto_1.Contacto)
], DetallesContactoComponent.prototype, "contacto", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DetallesContactoComponent.prototype, "verFacebook", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DetallesContactoComponent.prototype, "verTwitter", void 0);
DetallesContactoComponent = __decorate([
    core_1.Component({
        selector: 'detalles-contacto',
        templateUrl: './detalles-contacto.component.html',
        styleUrls: ['./detalles-contacto.component.css']
    })
], DetallesContactoComponent);
exports.DetallesContactoComponent = DetallesContactoComponent;
//# sourceMappingURL=detalles-contacto.component.js.map