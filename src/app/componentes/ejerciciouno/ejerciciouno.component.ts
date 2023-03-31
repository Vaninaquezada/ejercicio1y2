import { Component } from '@angular/core';

@Component({
  selector: 'app-ejerciciouno',
  templateUrl: './ejerciciouno.component.html',
  styleUrls: ['./ejerciciouno.component.css']
})
export class EjerciciounoComponent {

  
  numero1="";
  numero2="";
  promedio="";
  suma="";
  
  
  limpiar(){
  
    this.numero1="";
  
    this.numero2="";
  
  }
  calcular(){
    this.suma= "Suma: " + (this.numero1 + this.numero2);
    this.promedio= "Promedio: " + (parseInt(this.numero1) + parseInt(this.numero2))/2;
  }
}
