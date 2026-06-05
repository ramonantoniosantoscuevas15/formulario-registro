import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-generico',
  imports: [],
  templateUrl: './listado-generico.html',
})
export class ListadoGenerico {
  @Input({required:true}) listado:any
}
