import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de Empleados';
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  // empleados:Empleado[]= [
  //   new Empleado("Juan","Díaz", "Presidente", 7200),
  //   new Empleado("Ana","Martin", "Directora", 5500),
  //   new Empleado("Maria","Fernandez", "Jefa seccion", 3500),
  //   new Empleado("Laura","Lopez", "Administrativo", 2500),
  // ];
  empleados:Empleado[] = [];

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){
    this.empleados=this.empleadosService.empleados;
  }

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadosService.agregarEmpleadoService(miEmpleado);
    this.miServicio.muestraMensaje("Nombre del empleado: " +this.cuadroNombre);
    // this.empleados.push(miEmpleado);
  }
}
