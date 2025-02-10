import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Icaracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'app-personaje1-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

@Input()
public caracterList:Icaracter[]=[{
  name :'Mazinger Z', /*Personaje temporal */
  tiempo:1972
}]

@Output()
public OnDelete: EventEmitter<string>=new EventEmitter();

onDeleteCaracterH(id?:string): void{
  if(!id) return;//si no existe el id,no hace nada
  console.log({id});
this.OnDelete.emit(id);
}


}
