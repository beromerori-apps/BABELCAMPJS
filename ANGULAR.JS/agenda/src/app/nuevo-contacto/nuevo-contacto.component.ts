import { Component } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';
import { Router } from "@angular/router";

@Component({
    template: `
        <h1> Nuevo contacto </h1>
        <formulario-contacto (formularioAceptado)="guardarContacto($event)"></formulario-contacto>
    `
})

export class NuevoContactoComponent { 
    
    constructor(
        private _contactosService: ContactosService,
        private _router: Router
    ) { }

    guardarContacto(contacto: Contacto) {
    this._contactosService.guardarContacto(contacto)
                          .subscribe(contacto => { 
                              // Navegar a mis contactos
                              this._router.navigate(['mis-contactos'])
                          });
    }
}