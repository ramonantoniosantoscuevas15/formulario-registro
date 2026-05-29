import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { GeneroDTO } from './generodto';

@Injectable({
  providedIn: 'root',
})
export class GeneroServices {
  private http = inject(HttpClient)
  private urlBase = environment.apiurl + '/generos'

   public obtenerporid(id: number): Observable<GeneroDTO>{
    return this.http.get<GeneroDTO>(`${this.urlBase}/${id}`)
   }
}
