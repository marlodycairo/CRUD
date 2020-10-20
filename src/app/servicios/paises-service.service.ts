import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  constructor( private http: HttpClient ) { }

  getPaises() {
    const url = 'https://restcountries.eu/rest/v2/all';
    return this.http.get( url )
        .pipe(
          map( (pais: any[]) => {
            return pais.map( dato => {
              return {
                nombre: dato.name
              }
            });
          })
        );
  }
}
