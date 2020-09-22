import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmpleadoService } from '../../servicios/empleado.service';
import { Empleado } from '../../models/empleado';
import { NgForm } from '@angular/forms';


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

  guardar( form: NgForm ): void {
    if ( form.invalid ) {
      console.log('Formulario no válido.');
      return;
    }

    this.objetoprueba = {
                          cedula: this.empleado.cedula,
                          nombre: this.empleado.nombreEmpleado,
                          fechanacimiento: this.empleado.fechaNacimiento
                        };

    console.log( this.infoempleado );

    this.empleadoService.updateEmpleado( this.infoempleado )
      .subscribe( resp => {
        console.log( resp );
      });

      // this.empleadoServicio.addEmpleado( this.objetoprueba )
      //   .subscribe( datoempleado => this.empleados.push( datoempleado ) );

  }

  // crearEmpleado( idEmpleado: number, nombreEmp: string, fecha: Date ) {

  //   console.log('datos empleado: ' , idEmpleado, nombreEmp, fecha );

  //   this.objetoprueba = {
  //     cedula: idEmpleado,
  //     nombreEmpleado: nombreEmp,
  //     fechaNacimiento: fecha
  //   };

    // this.empleado =
    //               {
    //                 id: idEmpleado,
    //                 nombre: nombreEmp,
    //                 fechanacimiento: fecha
    //               };

    // console.log( this.objetoprueba );

    // console.log( this.empleado );

  //   this.empleadoServicio.addEmpleado( this.objetoprueba )
  //       .subscribe( datoempleado => this.empleados.push( datoempleado ) );
  // }

}
