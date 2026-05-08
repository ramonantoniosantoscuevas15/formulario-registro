import { EstadoDTO } from "../Estado/estadodto";
import { GeneroDTO } from "../Genero/generodto";
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

}

export interface PacientesPostGetDTO{
  Generos: GeneroDTO[]
  Estados: EstadoDTO[]
  Sangres: SangreDTO[]
}
