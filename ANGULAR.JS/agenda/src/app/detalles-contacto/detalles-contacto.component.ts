import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Contacto } from '../entidades/contacto';

@Component({
    selector: 'detalles-contacto',
    templateUrl: '/app/detalles-contacto/detalles-contacto.component.html', // Ruta absoluta desde src porque no esta creado con @angular-cli
    styleUrls: ['app/detalles-contacto/detalles-contacto.component.css']
})

export class DetallesContactoComponent {
    
    @Input() contacto: Contacto;
    @Output() verFacebook: EventEmitter<string> = new EventEmitter();
    @Output() verTwitter: EventEmitter<string> = new EventEmitter();

    notificarFacebook() {
        this.verFacebook.emit(this.contacto.generarRutaFacebook());
    }

    notificarTwitter() {
        this.verTwitter.emit(this.contacto.generarRutaTwitter());
    }

}