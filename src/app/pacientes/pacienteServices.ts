import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { CrearPacienteDTO, PacienteDTO, PacientesPostGetDTO } from './pacientedto';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PacienteServices {
  private http = inject(HttpClient)
  private urlBase = environment.apiurl + '/pacientes'

  public crear(paciente:CrearPacienteDTO):Observable<PacienteDTO>{
    const formData = this.construirFormdata(paciente);
    return this.http.post<PacienteDTO>(this.urlBase,formData)

  }
  public crearGet():Observable<PacientesPostGetDTO>{
    return this.http.get<PacientesPostGetDTO>(`${this.urlBase}/PosGet`)
  }

  private construirFormdata(paciente:CrearPacienteDTO):FormData{
    const formData = new FormData()
    formData.append('Nombre',paciente.Nombre)
    formData.append('FechaNacimiento',paciente.FechaNacimiento.toISOString().split('T')[0])
    formData.append('Cedula',JSON.stringify(paciente.Cedula))
    formData.append('Correo',paciente.Correo)
    formData.append('Telefono',JSON.stringify(paciente.Telefono))
    formData.append('Direccion',paciente.Direccion)
    formData.append('Alegias',paciente.Alegias)
    formData.append('NotasMedicas',paciente.NotasMedicas)
    formData.append('NombreContacto',paciente.NombreContacto)
    formData.append('TelefonoContacto',JSON.stringify(paciente.TelefonoContacto))
    formData.append('GeneroId',JSON.stringify(paciente.GeneroId))
    formData.append('EstadoId',JSON.stringify(paciente.EstadoId))
    formData.append('SangreId',JSON.stringify(paciente.SangreId))
    formData.append('Doctores',JSON.stringify(paciente.Doctores))
    formData.append('Hospitales',JSON.stringify(paciente.Hospitales))
    return formData;

  }
}
