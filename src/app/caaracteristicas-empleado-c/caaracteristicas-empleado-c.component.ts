import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caaracteristicas-empleado-c',
  templateUrl: './caaracteristicas-empleado-c.component.html',
  styleUrls: ['./caaracteristicas-empleado-c.component.css']
})
export class CaaracteristicasEmpleadoCComponent implements OnInit {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  constructor() { }

  agregaCaracteristicas(value:string){
    this.caracteristicasEmpleados.emit(value);
  }

  ngOnInit(): void {
  }

}
