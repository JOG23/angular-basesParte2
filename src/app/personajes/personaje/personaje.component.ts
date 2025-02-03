import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes-personaje',
  standalone: false,

  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {

  public nombre: string='Jenny';
  public edad: number=44;


  get mensaje():string{
    return this.nombre.toUpperCase();

  }

getConcatenar():string{
  return `${this.nombre} - ${this.edad}`;
}

cambiarNombre():void{
 this.nombre='Spiderman';
}

cambiarEdad():void{
 this.edad=20;
}

resetear():void{
this.nombre='Jenny';
this.edad=44;
}


}
