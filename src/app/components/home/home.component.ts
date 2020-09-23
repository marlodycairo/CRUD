import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../servicios/empleado.service';
import { Empleado } from '../../models/empleado';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empleados: Empleado[] = [];

  empleado: any = {};

  constructor( private router: Router,
               private empleadosService: EmpleadoService ) { }

  ngOnInit(): void {

    this.empleadosService.getEmpleados()
        .subscribe( (info: any ) => {
          this.empleados = info;

          console.log( 'Listado empleados: ', this.empleados );
        });
  }


  // verEmpleado( id: number ) {
  //   console.log( id);

  //   this.router.navigate( ['/empleado', id] );
  // }

  editarEmpleado( empleado: Empleado ) {
    console.log( empleado );

    this.router.navigate( ['/empleado', empleado] );
  }

  deleteEmpleado( empleado: Empleado ) {

    console.log( empleado );

    if ( confirm('Está seguro que quiere eliminar éste empleado?' ) ) {
      this.empleadosService.deleteEmpleado( empleado )
            .subscribe();
    }
  }

}
