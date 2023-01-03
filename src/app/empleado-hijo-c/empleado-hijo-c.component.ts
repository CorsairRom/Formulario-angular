import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';


@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})


export class EmpleadoHijoCComponent implements OnInit {
  arrayCaracteristicas=[''];
  @Input() empleadoDeLista!:Empleado; //uso ! para no bypassear el tipeo estricto, asi no debo inicializar la variable
  @Input() indice!:number;
  constructor() { }
  
  ngOnInit(): void {
  }
  agregarCaracteristicas(nuevaCaracteristicas:string){
    this.arrayCaracteristicas.push(nuevaCaracteristicas)
  }

}
