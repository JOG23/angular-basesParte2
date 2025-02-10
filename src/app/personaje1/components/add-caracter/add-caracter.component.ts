import { Component, EventEmitter, Output } from '@angular/core';
import { Icaracter } from '../../interfaces/caracter.interface';

@Component({  /*Este es el componente HIJO*/
  selector: 'app-per1-add-caracter',
  standalone: false,

  templateUrl: './add-caracter.component.html',
  styleUrl: './add-caracter.component.css'
})
export class AddCaracterComponent {

  @Output()
  public onNuevoCaracter: EventEmitter<Icaracter> = new EventEmitter();


  public carcacter: Icaracter = {/*Inicializando el objeto*/
    name: "",
    tiempo: 0

  }

  enviarCaracteres(): void {

    /*Forma de depurar la app */
    //debugger;

    console.log(this.carcacter);
    if (this.carcacter.name.length === 0) return; /*Validado por si no proporciona el nombre */
    this.onNuevoCaracter.emit({...this.carcacter});/*pasamos el objeto por referencia{...} */


    this.carcacter.name = '';
    this.carcacter.tiempo = 0;

    /*Otra forma más eficiente seria: ambas formas son validas */
    this.carcacter={name:'', tiempo:0};

  }

}

