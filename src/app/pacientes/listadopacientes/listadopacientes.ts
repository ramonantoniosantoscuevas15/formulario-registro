import { Component, Input } from '@angular/core';
import { ListadoGenerico } from "../../componentes/listado-generico/listado-generico";

@Component({
  selector: 'app-listadopacientes',
  imports: [ListadoGenerico],
  templateUrl: './listadopacientes.html',
})
export class Listadopacientes {
  @Input({required:true}) pacientes!:any[]
}
