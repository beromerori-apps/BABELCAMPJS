import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'caja',
    template: `
        <div [style.backgroundColor]="color"
            (mouseenter)="notificar()"></div>`, // Para subscribirme a un evento se utilizan los ()
    styles: [`
        div {
            width: 100px;
            height: 100px;
        }
    `]
})

export class CajaComponent {

    // Recibimos color como parametro de entrada al componente
    @Input() color: string = 'green'; 

    // Definimos un emisor de eventos al padre
    @Output() encima: EventEmitter<string> = new EventEmitter(); // Lo que vamos a emitir es de tipo string

    // Emitimos un evento al padre
    notificar() {
        //console.log('Raton encima');
        this.encima.emit(`El color de la caja es: ${this.color}`);
    }
}