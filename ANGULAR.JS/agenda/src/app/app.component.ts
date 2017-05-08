import { Component, OnInit } from '@angular/core';

import { Contacto } from './entidades/contacto';
import { ContactosService } from './servicios/contactos.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  
})

export class AppComponent implements OnInit  { 

  listaContactos: Contacto[]; 
  contactoSeleccionado: Contacto;

  constructor(private _contactosService: ContactosService) {}

  ngOnInit() {
    this._contactosService.obtenerContactos()
                          .subscribe(contactos => {
                            this.listaContactos = contactos;
                            //console.log(this.listaContactos);
                          });
  }

  mostrarDestalles(contacto: Contacto): void {
    
    //console.log('Contacto seleccionado: ', contacto);
    this.contactoSeleccionado = contacto;
  }

  navegarRuta(ruta: string) {
    window.open(ruta, '_blank');
  }

  guardarContacto(contacto: Contacto) {
    this._contactosService.guardarContacto(contacto)
                          .subscribe(contacto => {
                              this.listaContactos.push(contacto);
                              console.log("Añadidio contacto: ", contacto);
                              console.log(this.listaContactos);
                          });
                            
                         
    /*console.log(contacto);
    this._contactosService.guardarContacto(contacto);
    console.log(this.listaContactos);*/
    //this._contactosService.guardarContacto(contacto);
  }

}