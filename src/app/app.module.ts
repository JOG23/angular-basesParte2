
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador.component';
//import { PersonajeComponent } from './personajes/personaje/personaje.component';
import { ListadoComponent } from './personajes/listado/listado.component';
import { ContadorModulo } from './contador/contador.modulo';
import { PersonajeModulo } from './personajes/personaje.modulo';

@NgModule({
  declarations: [
    AppComponent,
   // PersonajeComponent,
   ListadoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModulo,
    PersonajeModulo,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
