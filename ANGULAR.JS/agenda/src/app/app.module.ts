import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { CajaComponent } from './caja.component';

// debugger; Da igual en el punto que lo pongamos, ya que se abrira el debug en las developer Tools (es como si pusieramos un punto de ruptura)

@NgModule({
  imports: [ // Metemos todos los modulos que necesita mi app
    BrowserModule,
    FormsModule
  ],
  declarations: [ // Metemos todos los componentes, directivas y pipes
    AppComponent,
    CajaComponent 
  ],
  providers: [ // Metemos los servicios

  ],
  bootstrap: [ // Componente raiz de nuestra app
    AppComponent 
  ]
})
export class AppModule { }