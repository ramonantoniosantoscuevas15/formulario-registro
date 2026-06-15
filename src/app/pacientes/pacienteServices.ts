import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { CrearPacienteDTO, GeneroPacientesPostGetdto, PacienteDTO, PacientePostGetDTO } from './pacientedto';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PacienteServices {
  private http = inject(HttpClient)
  private urlBase = `${environment.apiurl}/pacientes`

  public crear(paciente:CrearPacienteDTO):Observable<PacienteDTO>{
    const formData = this.construirFormdata(paciente);
    return this.http.post<PacienteDTO>(this.urlBase,formData)

  }
  public crearGet():Observable<PacientePostGetDTO>{
    return this.http.get<PacientePostGetDTO>(`${this.urlBase}/PostGet`)
  }
  public crearGetgenero():Observable<GeneroPacientesPostGetdto>{
    return this.http.get<GeneroPacientesPostGetdto>(`${this.urlBase}/generopostget`)
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
    formData.append('HospitalId',JSON.stringify(paciente.HospitalId))
    formData.append('Doctores',JSON.stringify(paciente.Doctores))

    return formData;

  }
}
