import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';
import { PaisesServiceService } from '../../servicios/paises-service.service';
import { CargoEmpleadosService } from '../../servicios/cargo-empleados.service';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  empleados: Empleado[] = [];

  empleado: Empleado;

  objetoprueba: any = {};

  paises: any[] = [];

  cargos: any[] = [];

  constructor( private empleadoServicio: EmpleadoService,
               private router: Router,
               private paisesService: PaisesServiceService,
               private cargosEmpleados: CargoEmpleadosService ) { }

  ngOnInit(): void {
    this.paisesService.getPaises()
        .subscribe( info => {
        this.paises = info;

        this.paises.unshift({
          nombre: 'Seleccione País'
        });
        console.log( this.paises );
        });

    this.cargosEmpleados.getCargosEmpleados()
        .subscribe( datos => {
          this.cargos = datos;

          this.cargos.unshift({
            cargoEmpleado: 'Seleccione Cargo'
          });
          console.log(this.cargos);
        });
  }

  crearEmpleado( idEmpleado: number, nombreEmp: string, fecha: Date, cargo: string, usuario: string, pais: string, 
                 fechacontrato: Date ) {

    console.log('datos empleado: ' , idEmpleado, nombreEmp, fecha, cargo, usuario, pais, fechacontrato );

    this.objetoprueba = {
      cedula: idEmpleado,
      nombreEmpleado: nombreEmp,
      fechaNacimiento: fecha,
      cargo: cargo,
      usuario: usuario,
      pais: pais,
      fechaingreso: fechacontrato
      // status: status,
      // porcentajepropina: propina
    };

    console.log( this.objetoprueba );

    // console.log( this.empleado );

    this.empleadoServicio.addEmpleado( this.objetoprueba )
        .subscribe( datoempleado => this.empleados.push( datoempleado ) );

    return this.router.navigate(['/home']);
  }

}
