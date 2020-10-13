import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  empleados: Empleado[] = [];

  empleado: Empleado;

  objetoprueba: any = {};

  constructor( private empleadoServicio: EmpleadoService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  crearEmpleado( idEmpleado: number, nombreEmp: string, fecha: Date, cargo: string, usuario: string, pais: string, 
                 fechacontrato: Date, propina: number, estadoempleado: boolean ) {

    console.log('datos empleado: ' , idEmpleado, nombreEmp, fecha, cargo, usuario, pais, fechacontrato, propina, estadoempleado );

    this.objetoprueba = {
      cedula: idEmpleado,
      nombreEmpleado: nombreEmp,
      fechaNacimiento: fecha,
      cargo: cargo,
      usuario: usuario,
      pais: pais,
      fechaingreso: fechacontrato,
      porcentajepropina: propina,
      status: estadoempleado
    };

    console.log( this.objetoprueba );

    // console.log( this.empleado );

    this.empleadoServicio.addEmpleado( this.objetoprueba )
        .subscribe( datoempleado => this.empleados.push( datoempleado ) );

    return this.router.navigate(['/home']);
  }

}
