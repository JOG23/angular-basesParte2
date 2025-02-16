import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes-listado',
  standalone: false,

  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})


export class ListadoComponent {

public nombresCaricaturas:string[]=['Caricatura 1', 'Caricatura2', 'Caricatura3'];



public eliminaCari?:string=''; /*Propiedad de clase */

eliminarCaricatura():void{
this.eliminaCari= this.nombresCaricaturas.pop();

//const eliminarCari=this.nombresCaricaturas.pop();
//console.log(eliminaCari);


}



}
