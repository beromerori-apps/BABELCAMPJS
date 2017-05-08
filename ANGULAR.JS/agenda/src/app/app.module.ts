import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CajaComponent } from './ejemplos/caja.component';
import { EjemplosBindingComponent } from './ejemplos/ejemplos-binding.component';
import { EjemplosComponentesComponent } from './ejemplos/ejemplos-componentes.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './servicios/contactos.service';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { EjemplosInyeccionComponent, Servicio1, Servicio2, Servicio2Provider } from './ejemplos/ejemplos-inyeccion.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { ContactosResolve } from './servicios/contactos-resolve.service';
import { ProveedorDirecciones } from './configuracion/direcciones';




// debugger; Da igual en el punto que lo pongamos, ya que se abrira el debug en las developer Tools (es como si pusieramos un punto de ruptura)

@NgModule({
  imports: [ // Metemos todos los modulos que necesita mi app
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ // Metemos todos los componentes, directivas y pipes
    AppComponent,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent,
    ListaContactosComponent,
    DetallesContactoComponent,
    EjemplosInyeccionComponent,
    FormularioContactoComponent,
    MisContactosComponent,
    NuevoContactoComponent
  ],
  providers: [ // Metemos los servicios
    ContactosService,
    Servicio1, // Este tiene @Injectable
    Servicio2Provider,
    ContactosResolve,
    ProveedorDirecciones
  ],
  bootstrap: [ // Componente raiz de nuestra app
    AppComponent 
  ]
})
export class AppModule { }