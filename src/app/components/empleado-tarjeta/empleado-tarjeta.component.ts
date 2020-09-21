import { Component, Input, OnInit } from '@angular/core';

import { EmpleadoService } from '../../servicios/empleado.service';

import { Empleado } from '../../models/empleado';


@Component({
  selector: 'app-empleado-tarjeta',
  templateUrl: './empleado-tarjeta.component.html',
  styleUrls: ['./empleado-tarjeta.component.css']
})
export class EmpleadoTarjetaComponent implements OnInit {

  @Input() empleado: Empleado;

  constructor() { }

  ngOnInit(): void { 
  }

  actualizarEmpleado() {}


}
