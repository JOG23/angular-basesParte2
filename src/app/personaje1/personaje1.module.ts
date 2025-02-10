import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './paginas/main-pagina.component';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './components/list/list.component';
import { AddCaracterComponent } from './components/add-caracter/add-caracter.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCaracterComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class Personaje1Module {




}
