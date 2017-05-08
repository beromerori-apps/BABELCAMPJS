import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { ContactosResolve } from './servicios/contactos-resolve.service';

// Definimos la coleccion de rutas de nuestra app
const rutas: Routes = [
    { 
        path: 'mis-contactos', 
        component: MisContactosComponent, 
        // Antes de sacar esa pagina, cargamos la lista del servidor
        resolve: {
            contactos:  ContactosResolve
        } 
    },
    
    { path: 'nuevo-contacto', component:  NuevoContactoComponent },
    { path: '**', redirectTo: '/mis-contactos' } // Ruta por defecto cuando el usuario mete una url que no existe
];

// Creamos un nuevo modulo de routing a partir de las rutas definidas
const moduloConRutas = RouterModule.forRoot(rutas);

@NgModule({
    imports: [moduloConRutas],
    exports: [RouterModule]
})

export class AppRoutingModule {}