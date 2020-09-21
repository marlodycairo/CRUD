import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  empleados: Empleado[] = [];

  empleado: Empleado;

  objetoprueba: any = {};

  constructor( private empleadoServicio: EmpleadoService ) { }

  ngOnInit(): void {
  }

  crearEmpleado( idEmpleado: number, nombreEmp: string, fecha: Date ) {

    console.log('datos empleado: ' , idEmpleado, nombreEmp, fecha );

    this.objetoprueba = {
      cedula: idEmpleado,
      nombreEmpleado: nombreEmp,
      fechaNacimiento: fecha
    };

    // this.empleado =
    //               {
    //                 id: idEmpleado,
    //                 nombre: nombreEmp,
    //                 fechanacimiento: fecha
    //               };

    console.log( this.objetoprueba );

    // console.log( this.empleado );

    this.empleadoServicio.addEmpleado( this.objetoprueba )
        .subscribe( datoempleado => this.empleados.push( datoempleado ) );
  }

}
