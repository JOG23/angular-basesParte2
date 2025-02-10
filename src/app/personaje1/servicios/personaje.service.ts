import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { Icaracter } from '../interfaces/caracter.interface';

console.log(v4());

@Injectable({
  providedIn: 'root'
})

export class personajeService {

  public caracterV: Icaracter[] = [{
    id: v4(),
    name: 'ThunderCats',/* Personaje 1 */
    tiempo: 1985
  }, {
    id: v4(),
    name: 'Transformers', /*Personaje 2*/
    tiempo: 1984

  },
  {
    id: v4(),
    name: 'José Miel', /*Personaje 3*/
    tiempo: 1970

  }];

/*spread (...) se utiliza para expandir elementos de
 un array u objeto en lugares donde se esperan múltiples elementos */
  addCaracterP(caracter: Icaracter): void {
    console.log('MainPage');
    console.log(caracter);

    const newCaracter: Icaracter={id:v4(),... caracter};
    this.caracterV.push(newCaracter);

  }

  /* onDeleteCaracterP(index: number) {
    //Emite el ID del personaje
    console.log({ index });
    this.caracterV.splice(index, 1);// 1: es para que elimine uno por uno
  }
    */


  deleteCarcaterXid(id:string){//Elimina por id no por indice
    this.caracterV=this.caracterV.filter(carac =>carac.id!==id);
  }



}
