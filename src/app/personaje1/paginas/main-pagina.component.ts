import { Component, OnInit } from '@angular/core';
import { Icaracter } from '../interfaces/caracter.interface';
import { personajeService } from '../servicios/personaje.service';

@Component({ /*Este es el componente PADRE */
  selector: 'app-per1-main-pagina',
  standalone: false,
  templateUrl: './main-pagina.component.html'
})

export class MainPageComponent  {

constructor(private perService: personajeService){}

get caracterV(): Icaracter[]{
  return [...this.perService.caracterV];
}

onDeleteCarcacter(id:string):void{
this.perService.deleteCarcaterXid(id);
}

onNewCaracater(caracter:Icaracter):void{
  this.perService.addCaracterP(caracter);
}


}
