import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CrearDoctorDTO, DoctorAutoCompleteDTO } from './doctordto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorServices {
  private http = inject(HttpClient)
  private urlBase = environment.apiurl + '/doctores'

  public crear(doctor:CrearDoctorDTO){
    return this.http.post(this.urlBase,doctor)
  }
  public obtenerporNombre(nombre: string):Observable<DoctorAutoCompleteDTO[]>{
    return this.http.get<DoctorAutoCompleteDTO[]>(`${this.urlBase}/${nombre}`)
  }
}
