import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// debugger; Da igual en el punto que lo pongamos, ya que se abrira el debug en las developer Tools (es como si pusieramos un punto de ruptura)

@NgModule({
  imports: [ 
    BrowserModule 
  ],
  declarations: [ 
    AppComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
