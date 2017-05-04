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
/*interface Coche {
  ruedas: number;
  pegatinas?: string[];
}*/
var AppComponent = (function () {
    function AppComponent() {
        this.alumnos = 'Babel';
        this.numeroDeLaSuerte = 43;
        // Binding de propiedades
        this.textAreaLineas = 6;
        // Binding de clases
        this.pintamosClase = true;
        this.clases = { uno: true, dos: true };
    }
    // Binding de estilos
    AppComponent.prototype.obtenerColor = function () {
        return 'green';
    };
    AppComponent.prototype.obtenerEstilos = function () {
        return {
            backgroundColor: 'red',
            color: 'white'
        };
    };
    AppComponent.prototype.mostrarMensaje = function () {
        alert('Hola señores');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styles: ["\n    .caja {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n    }"
        ]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map