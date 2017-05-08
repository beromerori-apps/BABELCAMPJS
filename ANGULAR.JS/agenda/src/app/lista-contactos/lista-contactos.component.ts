import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Contacto } from '../entidades/contacto';

@Component({
    selector: 'lista-contactos',
    templateUrl: './lista-contactos.component.html',
    styleUrls: ['./lista-contactos.component.css']
})

export class ListaContactosComponent {
    
    @Input() contactos: any[];

    @Output() seleccionado: EventEmitter<Contacto> = new EventEmitter();

    notificarContactoSeleccionado(contacto: Contacto): void {
        this.seleccionado.emit(contacto);
    }
 
    constructor() { }

}