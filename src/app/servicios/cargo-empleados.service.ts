import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CargoEmpleadosService {

  constructor( private http: HttpClient ) { }

  getCargosEmpleados() {
    // const url = 'https://localhost:44355/api/TblCargos';
    const url = 'https://proyectocrud.azurewebsites.net/api/TblCargos';
    return this.http.get( url )
               .pipe(
                 map( (response: any[]) => {
                   return response.map( cargo => {
                     return {
                       cargoEmpleado: cargo.nomCargo
                     }
                   });
                 })
               );
  }
}
