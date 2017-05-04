import { Component, Input } from '@angular/core';

import { Contacto } from '../entidades/contacto';

@Component({
    selector: 'detalles-contacto',
    templateUrl: '/app/detalles-contacto/detalles-contacto.component.html' // Ruta absoluta desde src porque no esta creado con @angular-cli
})

export class DetallesContactoComponent {
    
    @Input() contacto: Contacto;


}