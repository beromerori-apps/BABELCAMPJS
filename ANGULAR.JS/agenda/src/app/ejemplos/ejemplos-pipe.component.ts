import { Component } from '@angular/core';

@Component({
    selector: 'ejemplos-pipe',
    template: `
        <div>
            <strong>Pipa de fecha: </strong> {{ fecha | date:'dd/MM/yyyy' }}<br>
            <strong>Pipa de moneda: </strong> {{ precio | currency: 'EUR' }}<br>
            <strong>Pipa de texto: </strong> {{ texto | titlecase }}<br>
            <strong>Pipa de json: </strong> <pre>{{ objeto | json }}</pre>
        </div>
    `
})

export class EjemplosPipeComponent {
    
    fecha: Date = new Date();

    precio: number = 34.95;

    texto: string = 'texto que estaba en minuscula';

    objeto: any = {
        selector: 'aaa',
        zzz: 222,
        fecha: new Date()
    };

    

}