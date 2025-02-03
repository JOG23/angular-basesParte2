import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeComponent } from './personaje/personaje.component';


@NgModule({
declarations:[
  PersonajeComponent,

],
exports:[/*exponer */
  PersonajeComponent,
],
imports:[
  CommonModule/*ngfor, ngif */
]
})


export class PersonajeModulo{


}
