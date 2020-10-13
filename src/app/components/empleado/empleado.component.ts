import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';

import { EmpleadoService } from '../../servicios/empleado.service';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleados: Empleado[] = [];

  infoempleado: Empleado = {cedula : 0, fechaNacimiento: null, nombreEmpleado: '', pais: '', 
                            usuario: '', fechaingreso: null, cargo: '', porcentajepropina: 0, status: false };
  cedula: number;
  nombreEmpleado: string;
  fechaNacimiento: Date;
  pais: string;
  usuario: string;
  fechaingreso: Date;
  // area: string;
  cargo: string;
  porcentajepropina: number;
  status: false;

  empleado: any = {};

  constructor( private router: ActivatedRoute,
               private empleadoService: EmpleadoService,
               private route: Router ) {

    this.router.params.subscribe( datoempleado => {
          this.empleadoService.getEmpleado( datoempleado['id'] )
          .subscribe( info => {
            console.log( info );

            this.infoempleado.cedula = info['cedula'];
            this.infoempleado.fechaNacimiento = info['fechaNacimiento'];
            this.infoempleado.nombreEmpleado = info['nombreEmpleado'];
          });
    });
  }

  ngOnInit(): void {
  }

   onSubmit(f: NgForm) {
    console.log( this.empleado );
    console.log(this.infoempleado);
    this.empleadoService.updateEmpleado( this.infoempleado )
        .subscribe( datoempleado => this.empleados.push( datoempleado ) );

    return this.route.navigate(['/home']);
   }

}
