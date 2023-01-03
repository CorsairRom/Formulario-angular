import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados:Empleado[]= [
    new Empleado("Juan","Díaz", "Presidente", 7200),
    new Empleado("Ana","Martin", "Directora", 5500),
    new Empleado("Maria","Fernandez", "Jefa seccion", 3500),
    new Empleado("Laura","Lopez", "Administrativo", 2500),
  ];
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) { }

  agregarEmpleadoService(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona agregada:"+ "\n" +empleado.nombre);
    this.empleados.push(empleado);
  }
}
