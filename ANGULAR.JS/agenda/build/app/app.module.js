"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var caja_component_1 = require("./ejemplos/caja.component");
var ejemplos_binding_component_1 = require("./ejemplos/ejemplos-binding.component");
var ejemplos_componentes_component_1 = require("./ejemplos/ejemplos-componentes.component");
var lista_contactos_component_1 = require("./lista-contactos/lista-contactos.component");
var contactos_service_1 = require("./servicios/contactos.service");
var detalles_contacto_component_1 = require("./detalles-contacto/detalles-contacto.component");
var ejemplos_inyeccion_component_1 = require("./ejemplos/ejemplos-inyeccion.component");
var formulario_contacto_component_1 = require("./formulario-contacto/formulario-contacto.component");
var app_routing_module_1 = require("./app-routing.module");
var mis_contactos_component_1 = require("./mis-contactos/mis-contactos.component");
var nuevo_contacto_component_1 = require("./nuevo-contacto/nuevo-contacto.component");
var contactos_resolve_service_1 = require("./servicios/contactos-resolve.service");
var direcciones_1 = require("./configuracion/direcciones");
var ejemplos_observables_component_1 = require("./ejemplos/ejemplos-observables.component");
var ejemplos_pipe_component_1 = require("./ejemplos/ejemplos-pipe.component");
var ordenar_pipe_1 = require("./ejemplos/ordenar.pipe");
var ejemplos_directivas_component_1 = require("./ejemplos/ejemplos-directivas.component");
var ejemplos_directivas_directive_1 = require("./ejemplos/ejemplos-directivas.directive");
// debugger; Da igual en el punto que lo pongamos, ya que se abrira el debug en las developer Tools (es como si pusieramos un punto de ruptura)
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule, http_1.JsonpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            caja_component_1.CajaComponent,
            ejemplos_binding_component_1.EjemplosBindingComponent,
            ejemplos_componentes_component_1.EjemplosComponentesComponent,
            lista_contactos_component_1.ListaContactosComponent,
            detalles_contacto_component_1.DetallesContactoComponent,
            ejemplos_inyeccion_component_1.EjemplosInyeccionComponent,
            formulario_contacto_component_1.FormularioContactoComponent,
            mis_contactos_component_1.MisContactosComponent,
            nuevo_contacto_component_1.NuevoContactoComponent,
            ejemplos_observables_component_1.EjemplosObservablesComponent,
            ejemplos_observables_component_1.EjemplosObservablesWikipediaComponent,
            ejemplos_pipe_component_1.EjemplosPipeComponent, ordenar_pipe_1.OrdenarPipe,
            ejemplos_directivas_component_1.EjemplosDirectivasComponent, ejemplos_directivas_directive_1.EjemplosDirectivasAtributoDirective
        ],
        providers: [
            contactos_service_1.ContactosService,
            ejemplos_inyeccion_component_1.Servicio1,
            ejemplos_inyeccion_component_1.Servicio2Provider,
            contactos_resolve_service_1.ContactosResolve,
            direcciones_1.ProveedorDirecciones
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map