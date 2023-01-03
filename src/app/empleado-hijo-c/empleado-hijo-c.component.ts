import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';


@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})


export class EmpleadoHijoCComponent implements OnInit {
  
  @Input() empleadoDeLista!:Empleado;
  @Input() indice!:number;
  constructor() { }
  
  ngOnInit(): void {
  }

}
