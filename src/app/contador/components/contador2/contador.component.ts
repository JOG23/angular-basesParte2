import { Component } from "@angular/core";


@Component({
  selector:'app-contador',
  standalone: false,
  template:`<h1>Hola Contador</h1>
  <h3>Contador:{{contador}} </h3>

<button (click)="incremenentarValor2(+1)" >+1</button>
<button (click)="reiniciar2()">Reset</button>
<button (click)="incremenentarValor2(-1)" >-1</button>

  `

})
export class ContadorComponent{

  public contador:number=20;

  incremenentarValor2(value:number):void{
    this.contador+=value;
  }

  reiniciar2(){
    this.contador=10;
  }

}
