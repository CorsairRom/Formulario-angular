import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caaracteristicas-empleado-c',
  templateUrl: './caaracteristicas-empleado-c.component.html',
  styleUrls: ['./caaracteristicas-empleado-c.component.css']
})
export class CaaracteristicasEmpleadoCComponent implements OnInit {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  constructor(private miServicio:ServicioEmpleadosService) { }

  agregaCaracteristicas(value:string){
    this.caracteristicasEmpleados.emit(value);
    this.miServicio.muestraMensaje(value);
  }

  ngOnInit(): void {
  }

}
