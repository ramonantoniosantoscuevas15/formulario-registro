import { Component, Input } from '@angular/core';
import { ListadoGenerico } from "../../componentes/listado-generico/listado-generico";
import { DatePipe } from '@angular/common';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-listadopacientes',
  imports: [ListadoGenerico, DatePipe, MatAnchor],
  templateUrl: './listadopacientes.html',
})
export class Listadopacientes {
  @Input({required:true}) pacientes!:any[]
}
