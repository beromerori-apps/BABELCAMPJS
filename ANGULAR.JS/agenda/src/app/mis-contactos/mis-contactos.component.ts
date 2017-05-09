import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../servicios/contactos.service';
import { Contacto } from '../entidades/contacto';
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './mis-contactos.component.html' 
})

export class MisContactosComponent implements OnInit {
    
    listaContactos: Contacto[]; 
    contactoSeleccionado: Contacto;
    
    constructor(private _contactosService: ContactosService,
                private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        
        /*this._activatedRoute.data.forEach((data: any) => {
            this.listaContactos = data.contactos;
        })*/

        // Otra forma

        this._activatedRoute.data.forEach( (data: {contactos: Contacto[]}) => {
                this.listaContactos = data.contactos;
        });

        /*this._contactosService.obtenerContactos()
                            .subscribe(contactos => {
                                this.listaContactos = contactos;
                                //console.log(this.listaContactos);
                            });*/
                            
    }

    mostrarDestalles(contacto: Contacto): void {
        this.contactoSeleccionado = contacto;
    }

    navegarRuta(ruta: string) {
        window.open(ruta, '_blank');
    }

    eliminarContacto(contacto: Contacto) {
        if(confirm(`¿Estas seguro que quieres eliminar a ${contacto.nombre}?`)){
            this._contactosService.eliminarContacto(contacto).subscribe(
                () => {
                    debugger;
                    console.log('Eliminado');
                    const indice: number = this.listaContactos.findIndex(
                        (c: Contacto) => c.id === contacto.id );
                    
                    if(indice !== -1) {
                        // Lo elimino de la lista
                        this.listaContactos.splice(indice,1);
                        // Lo quito de seleccionado
                        this.contactoSeleccionado = null;
                    }
                });
        }
        
        console.log('hola');
    }

}