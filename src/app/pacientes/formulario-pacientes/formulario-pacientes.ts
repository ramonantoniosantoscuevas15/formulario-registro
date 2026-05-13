import { Component, inject } from '@angular/core';
import { Pacientes } from "../pacientes";
import { CrearPacienteDTO } from '../pacientedto';
import { SelectorMultipleDTO } from '../../componentes/selector-multiple/selector-multiplemodelo';
import { DoctorAutoCompleteDTO } from '../../doctores/doctordto';
import { HospitalAutocompleDTO } from '../../hospitales/hospitalesdto';
import { PacienteServices } from '../pacienteServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-pacientes',
  imports: [Pacientes],
  templateUrl: './formulario-pacientes.html',
})
export class FormularioPacientes {
  generoseleccionado:SelectorMultipleDTO[]=[]
  generonoseleccionado:SelectorMultipleDTO[]=[]
  estadoseleccionado:SelectorMultipleDTO[]=[]
  estadonoseleccionado:SelectorMultipleDTO[]=[]
  sangreseleccionada:SelectorMultipleDTO[]=[]
  sangrenoseleccionada:SelectorMultipleDTO[]=[]
  doctoresSeleccionados:DoctorAutoCompleteDTO[]=[]
  hospitalesSeleccionados:HospitalAutocompleDTO[]=[]
  pacienteServices = inject(PacienteServices)
  router = inject(Router);
constructor(){
  this.pacienteServices.crearGet().subscribe(modelo =>{
    this.generonoseleccionado = modelo.Generos.map(genero =>{
      return <SelectorMultipleDTO>{Id:genero.Id,Tipo:genero.Tipo}
    })
    this.estadonoseleccionado = modelo.Estados.map(estado =>{
      return <SelectorMultipleDTO>{Id:estado.Id,Tipo:estado.Tipo}
    })
    this.sangrenoseleccionada = modelo.Sangres.map(sangre =>{
      return <SelectorMultipleDTO>{Id:sangre.Id,Tipo:sangre.Tipo}
    })

  })
}

  guardarpaciente(paciente: CrearPacienteDTO){
    this.pacienteServices
    this.pacienteServices.crear(paciente).subscribe({
      next:paciente =>{
        console.log(paciente)
        this.router.navigate(['/doctores'])
      }
    })

  }
}
