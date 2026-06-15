
import { DoctorAutoCompleteDTO } from "../doctores/doctordto";
import { EstadoDTO } from "../Estado/estadodto";
import { GeneroDTO } from "../Genero/generodto";
import { HospitalDTO } from "../hospitales/hospitalesdto";
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
  HospitalId?:number[],
  Doctores?:DoctorAutoCompleteDTO[]


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
  Generos: GeneroDTO[],
  Estados: EstadoDTO[],
  Sangres: SangreDTO[],
  Hospitales:HospitalDTO[]
  Doctores:DoctorAutoCompleteDTO[]




}

export interface PacientePostGetDTO{
  Genero: GeneroDTO[],
  Estados: EstadoDTO[],
  Sangres: SangreDTO[],
  Hospitales:HospitalDTO[]
}

export interface GeneroPacientesPostGetdto{
  Generos:GeneroDTO[]
}

export interface PacientePutGetDTO{
  Paciente:PacienteDTO
  GeneroSeleccionado:GeneroDTO[]
  GeneroNoSeleccionado:GeneroDTO[]
  EstadoSeleccionado:EstadoDTO[]
  EstadoNoSeleccionado:EstadoDTO[]
  SangreSeleccionado:SangreDTO[]
  SangreNoSeleccionado:SangreDTO[]
  HospitalesSeleccionados:HospitalDTO[]
  HospitalesNoSeleccionados:HospitalDTO[]
  Dotore:DoctorAutoCompleteDTO[]

}
