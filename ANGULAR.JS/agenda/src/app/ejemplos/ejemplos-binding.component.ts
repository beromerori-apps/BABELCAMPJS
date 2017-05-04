import { Component } from '@angular/core';

/*interface Coche {
  ruedas: number;
  pegatinas?: string[];
}*/

@Component({

    selector: 'ejemplos-binding',
    templateUrl: '/app/ejemplos/ejemplos-binding.component.html',
    styles: [`
        .caja {
        width: 50px;
        height: 50px;
        background-color: red;
        }`
    ]
})

export class EjemplosBindingComponent {

  alumnos:string = 'Babel'; 

  numeroDeLaSuerte: number = 43;

  // Binding de propiedades
  textAreaLineas: number = 6;

  // Binding de clases
  pintamosClase: boolean = true;
  clases: any = { uno:true, dos: true };

  mensaje: string = 'cambiame';

  /*constructor() {
    const seat: Coche = {
      ruedas: 4,
    };
  }*/

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

}