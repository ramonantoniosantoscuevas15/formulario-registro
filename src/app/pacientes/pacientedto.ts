
import { DoctorAutoCompleteDTO } from "../doctores/doctordto";
import { EstadoDTO } from "../Estado/estadodto";
import { GeneroDTO } from "../Genero/generodto";
import { HospitalAutocompleDTO } from "../hospitales/hospitalesdto";
import { SangreDTO } from "../Sangre/sangredto";

export interface CrearPacienteDTO{
  Nombre:string,
  FechaNacimiento:Date,
  Cedula:number,
  Correo:string,
  Telefono:number,
  Direccion:string,
  Alegias:string,
  NotasMedicas:string,
  NombreContacto:string,
  TelefonoContacto:number,
  GeneroId?:number[],
  EstadoId?:number[],
  SangreId?:number[],
  Doctores?:DoctorAutoCompleteDTO[]
  Hospitales?:HospitalAutocompleDTO[]

}
export interface PacienteDTO{
  Id:number,
  Nombre:string,
  FechaNacimiento:Date,
  Cedula:number,
  Correo:string,
  Telefono:number,
  Direccion:string,
  Alegias:string,
  NotasMedicas:string,
  NombreContacto:string,
  TelefonoContacto:number,
  Generos?: GeneroDTO[],
  Estados?: EstadoDTO[],
  Sangres?: SangreDTO[],
  Doctores?:DoctorAutoCompleteDTO[],
  Hospitales?:HospitalAutocompleDTO[]



}

export interface PacientesPostGetDTO{
  Generos: GeneroDTO[]
  Estados: EstadoDTO[]
  Sangres: SangreDTO[]
}

export interface PacientePutGetDTO{
  Paciente:PacienteDTO
  GeneroSeleccionado:GeneroDTO[]
  GeneroNoSeleccionado:GeneroDTO[]
  EstadoSeleccionado:EstadoDTO[]
  EstadoNoSeleccionado:EstadoDTO[]
  SangreSeleccionado:SangreDTO[]
  SangreNoSeleccionado:SangreDTO[]
  Dotore:DoctorAutoCompleteDTO[]
  Hospitales:HospitalAutocompleDTO[]
}
