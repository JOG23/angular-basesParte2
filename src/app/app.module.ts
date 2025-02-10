

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador.component';
//import { PersonajeComponent } from './personajes/personaje/personaje.component';
import { ListadoComponent } from './personajes/listado/listado.component';
import { ContadorModulo } from './contador/contador.modulo';
import { PersonajeModulo } from './personajes/personaje.modulo';

import { Personaje1Module } from './personaje1/personaje1.module';
import { Prueba1Component } from './Goals/prueba1/prueba1.component';


@NgModule({
  declarations: [
    AppComponent,
   // PersonajeComponent,
   ListadoComponent,
   Prueba1Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModulo,
    PersonajeModulo,
    Personaje1Module,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
