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
  encontrarEmpleado(indice:number){
    let empleado:Empleado = this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    let empleadoModificado=this.empleados[indice];
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellidos=empleado.apellidos;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;
  }
  eliminarEmpleado(indice:number){
    this.empleados.splice(indice, 1);
  }

}
