import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  titulo:string = 'Formulario';
  empleados:Empleado[] = [];
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  indice!:number;
  accion!:number;
  constructor(private empleadosService:EmpleadosService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado = this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellidos;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);
  }
  actualizaEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
    this.router.navigate(['']);
  }
  eliminarEmpleado(){
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
  }

  accionEmpleado(){
    if (this.accion == 1) {
      this.actualizaEmpleado();
      
    } else {
      this.eliminarEmpleado();
    }
    this.router.navigate(['']);
  }

}
