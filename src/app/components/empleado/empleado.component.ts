import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmpleadoService } from '../../servicios/empleado.service';
import { Empleado } from '../../models/empleado';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleados: Empleado[] = [];

  infoempleado: Empleado;

  empleado: any = {};

  objetoprueba: any = {};

  constructor( private router: ActivatedRoute,
               private empleadoService: EmpleadoService ) {

    this.router.params.subscribe( datoempleado => {
      this.empleado = this.empleadoService.getEmpleado( datoempleado['id'] )
          .subscribe( info => {
            console.log( info );

            this.empleado = info;

            console.log( this.empleado );

          });

    });
  }

  ngOnInit(): void {
  }

  // this.empleadosService.getEmpleados()
  //     .subscribe( (datos: any) => {
  //       this.empleados = datos;
  //       console.log( 'Los empleados son: ', datos );
  //     } );

  // editarEmpleado( id: number ) {

  //   this.empleadoService.getEmpleado( id )
  //       .subscribe( dato => {
  //         console.log( dato );
  //         this.empleado = dato;
  //       });
  // }


  actualizarEmpleado( idEmpleado: number, nombreEmp: string, fecha: Date ) {

    console.log('datos empleado: ' , idEmpleado, nombreEmp, fecha );

    this.objetoprueba = {
      cedula: idEmpleado,
      nombreEmpleado: nombreEmp,
      fechaNacimiento: fecha
    };

    console.log( this.objetoprueba );

    this.empleado = this.objetoprueba;
    console.log( this.empleado );

    this.empleadoService.updateEmpleado( this.empleado )
        .subscribe( datoempleado => this.empleados.push( datoempleado ) );
  }

}
