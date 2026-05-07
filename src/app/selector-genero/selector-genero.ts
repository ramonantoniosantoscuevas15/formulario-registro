import { Component, Input } from '@angular/core';
import { SelectorgeneroDTO } from './selector-generomodelo';

@Component({
  selector: 'app-selector-genero',
  imports: [],
  templateUrl: './selector-genero.html',
})
export class SelectorGenero {
  @Input({required:true}) Seleccionados!:SelectorgeneroDTO[]
  @Input({required:true}) NoSeleccionados!:SelectorgeneroDTO[]

  seleccionar(elemento: SelectorgeneroDTO,indice:number){
    this.Seleccionados.push(elemento)
    this.NoSeleccionados.slice(indice,1)
  }

  deseleccionados(elemento: SelectorgeneroDTO,indice:number){
    this.Seleccionados.push(elemento)
    this.NoSeleccionados.splice(indice,1)
  }

  seleccionarTodo(){
    this.Seleccionados.push(...this.NoSeleccionados)
    this.NoSeleccionados.length = 0
  }
  deseleccionar(elemento: SelectorgeneroDTO, indice: number){
    this.Seleccionados.push(elemento)
    this.NoSeleccionados.splice(indice,1)
  }

  deseleccionarTodo(){
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados.length = 0
  }


}
