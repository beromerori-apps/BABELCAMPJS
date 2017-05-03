import { Component } from '@angular/core';

/*interface Coche {
  ruedas: number;
  pegatinas?: string[];
}*/

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{alumnos}}</h1>
    <h2>Y el numero de la suerte es: {{numeroDeLaSuerte}}</h2>
    <textarea [rows]="textAreaLineas"></textarea> 
    <div [class.caja]="pintamosClase"></div> <!-- Sera <div class="caja"></div> si 'pintamosClase' = true--> 
    <div [ngClass]="clases"></div>
    <p [style.color]="obtenerColor()">Buenos dias</p>
    <p [ngStyle]="obtenerEstilos()">Buenas tardes</p>
    <button (click)="mostrarMensaje()">Mostrar mensaje</button>
    <input [(ngModel)]="mensaje" type="text"/>
    {{ mensaje }}
    `,
  styles: [`
    .caja {
      width: 50px;
      height: 50px;
      background-color: red;
    }`
  ]
})
export class AppComponent  { 
  alumnos = 'Babel'; 

  numeroDeLaSuerte: number = 43;

  // Binding de propiedades
  textAreaLineas: number = 6;

  // Binding de clases
  pintamosClase: boolean = true;
  clases: any = { uno:true, dos: true };

  constructor() {}

  // Binding de estilos
  obtenerColor(): string {
    return 'green';
  }

  obtenerEstilos(): any {
    return {
      backgroundColor: 'red',
      color: 'white'
    }
  }

  mostrarMensaje(): void {
    alert('Hola señores');
  }

  /*constructor() {
    const seat: Coche = {
      ruedas: 4,

    };
  }*/

}
