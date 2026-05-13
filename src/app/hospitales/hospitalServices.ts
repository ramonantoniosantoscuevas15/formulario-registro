import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { HospitalAutocompleDTO } from './hospitalesdto';

@Injectable({
  providedIn: 'root',
})
export class HospitalServices {
  private http = inject(HttpClient)
  private urlBase = environment.apiurl + '/hospitales'


  public obtenerporNombre(nombre: string):Observable<HospitalAutocompleDTO[]>{
    return this.http.get<HospitalAutocompleDTO[]>(`${this.urlBase}/${nombre}`)
  }
}
