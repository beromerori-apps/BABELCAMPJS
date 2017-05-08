import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';

@Component({
    selector: 'formulario-contacto',
    templateUrl: './formulario-contacto.component.html',
    styleUrls: ['./formulario-contacto.component.css'] 
})

export class FormularioContactoComponent {
    
    @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

    rutaAvatar: string = '';

    constructor(private _contactosService: ContactosService) {}

    ngOnInit () {
        this._contactosService.generarRutaAvatar()
                              .subscribe(ruta => {
                                  this.rutaAvatar = ruta;
                              });
    }

    notificarContacto(contactoForm: FormGroup) {
        const contacto: Contacto = Contacto.desdeJSON(contactoForm.value);
        contacto.avatar = this.rutaAvatar;
        this.formularioAceptado.emit(contacto);
        //console.log(contactoForm);
    }
}