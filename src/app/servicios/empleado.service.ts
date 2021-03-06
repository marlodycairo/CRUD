import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  empleados: Empleado;

  constructor( private http: HttpClient ) {

    console.log('SERVICIO FUNCIONA!!!' );

  }

  getUrl( query: string ) {

    // const url = `https://localhost:44355/${ query }`;
    const url = `https://proyectocrud.azurewebsites.net/${ query }`;

    return this.http.get( url );
  }

  getEmpleados() {

    // return this.http.get('https://localhost:44355/api/TblEmpleados')
    return this.getUrl('api/TblEmpleados')
        .pipe(
          map( (dato: any[]) =>
              dato.map( empleado => ( empleado)
              )
            )
        ) ;
  }

  getEmpleado( id: number ) {

    return this.getUrl(`api/TblEmpleados/${ id }`);
  }


  // header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
  // [EnableCors(origins: "http://example.com", 
  //   headers: "accept,content-type,origin,x-my-header", methods: "*")]

  // POST: Create
  addEmpleado( empleado: Empleado ): Observable<Empleado> {

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json, text/json'
    //   })
    // };
    // const url = 'https://localhost:44355/api/TblEmpleados';
    const url = 'https://proyectocrud.azurewebsites.net/api/TblEmpleados';

    return this.http.post<Empleado>( url, empleado )
                .pipe();
  }


  // PUT: Update
  updateEmpleado( empleado: Empleado ): Observable<Empleado> {

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json, text/json'
    //   })
    // };
    // const empleadoTemporal = {
    //   ...empleado
    // };

    // delete empleadoTemporal.cedula;

    // const url = `https://localhost:44355/api/TblEmpleados/${ empleado.cedula }`;
    const url = `https://proyectocrud.azurewebsites.net/api/TblEmpleados/${ empleado.cedula }`;

    return this.http.put<Empleado>( url, empleado )
          .pipe();
  }


  // DELETE
  deleteEmpleado( empleado: Empleado ): Observable<{}> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // const url = `https://localhost:44355/api/TblEmpleados/${ empleado }`;
    const url = `https://proyectocrud.azurewebsites.net/api/TblEmpleados/${ empleado }`;

    return this.http.delete( url, httpOptions );
  }


  // agregarEmpleado( empleado: Empleado) {
  //   this.empleados.push( empleado );

  //   this.guardarEmpleados();
  // }

  // listarEmpleados() {

  //   localStorage.getItem('empleados');
  //   return this.empleados;
  // }

  // guardarEmpleados() {
  //   localStorage.setItem('empleados', JSON.stringify( this.empleados ));
  // }

}
