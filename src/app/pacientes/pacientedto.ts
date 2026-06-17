
import { DoctorAutoCompleteDTO } from "../doctores/doctordto";
import { EstadoDTO } from "../Estado/estadodto";

import { HospitalDTO } from "../hospitales/hospitalesdto";
import { SangreDTO } from "../Sangre/sangredto";

export interface CrearPacienteDTO{
  Nombre:string,
  FechaNacimiento:Date,
  Genero:[],
  Cedula:number,
  Correo:string,
  Telefono:number,
  Direccion:string,
  Sangre:[],
  Estado:[],
  Hospital:string,
  NombreDoctor:string,
  Motivo:string,
  Alegias:string,
  NotasMedicas:string,
  NombreContacto:string,
  TelefonoContacto:number,



}
export interface PacienteDTO{
  Id:number,
  Nombre:string,
  FechaNacimiento:Date,
  Genero:[],
  Cedula:number,
  Correo:string,
  Telefono:number,
  Direccion:string,
  Sangre:[],
  Estado:[],
  Hospital:string,
  NombreDoctor:string,
  Motivo:string,
  Alegias:string,
  NotasMedicas:string,
  NombreContacto:string,
  TelefonoContacto:number,





}

export interface PacientePostGetDTO{

}

export interface GeneroPacientesPostGetdto{

}

export interface PacientePutGetDTO{
  Paciente:PacienteDTO


}
