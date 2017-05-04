import { Component, OnInit } from '@angular/core';

import { Contacto } from './entidades/contacto';
import { ContactosService } from './servicios/contactos.service';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
  
})

export class AppComponent implements OnInit  { 

  listaContactos: Contacto[]; 
  contactoSeleccionado: Contacto;

  constructor(private _contactosService: ContactosService) {}

  ngOnInit() {
    this.listaContactos = this._contactosService.obtenerContactos();
  }

  mostrarDestalles(contacto: Contacto): void {
    
    //console.log('Contacto seleccionado: ', contacto);
    this.contactoSeleccionado = contacto;
  }

}