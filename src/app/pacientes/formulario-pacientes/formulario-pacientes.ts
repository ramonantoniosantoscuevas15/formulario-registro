import { Component, inject } from '@angular/core';
import { Pacientes } from "../pacientes";
import { CrearPacienteDTO } from '../pacientedto';
import { SelectorMultipleDTO } from '../../componentes/selector-multiple/selector-multiplemodelo';
import { DoctorAutoCompleteDTO } from '../../doctores/doctordto';
import { HospitalDTO } from '../../hospitales/hospitalesdto';
import { PacienteServices } from '../pacienteServices';
import { Router } from '@angular/router';
import { SelectorDTO } from '../../componentes/selector/selectordto';
import { Cargando } from "../../shared/cargando/cargando";

@Component({
  selector: 'app-formulario-pacientes',
  imports: [Pacientes, Cargando],
  templateUrl: './formulario-pacientes.html',
})
export class FormularioPacientes {
  generoseleccionado:SelectorMultipleDTO[] = []
  generonoseleccionado:SelectorMultipleDTO[]=[]
  estadoseleccionado:SelectorMultipleDTO[]=[]
  estadonoseleccionado:SelectorMultipleDTO[]=[]
  sangreseleccionada:SelectorMultipleDTO[]=[]
  sangrenoseleccionada:SelectorMultipleDTO[]=[]
  doctoresSeleccionados:DoctorAutoCompleteDTO[]=[]
  hospitalesnoSeleccionados:HospitalDTO[]=[]
  hospitalesSeleccionados:HospitalDTO[]=[]

 pacienteServices = inject(PacienteServices)
 router = inject(Router);
 constructor(){
  this.pacienteServices.crearGet().subscribe(modelo => {
    this.generonoseleccionado = modelo.Genero.map(generos =>{

       return <SelectorMultipleDTO>{Id:generos.Id,Tipo:generos.Tipo}

    })

    this.estadonoseleccionado =modelo.Estados.map(estado=>{
      return <SelectorMultipleDTO>{Id:estado.Id,Tipo:estado.Tipo}
    })
    this.sangrenoseleccionada = modelo.Sangres.map(sangre =>{
      return<SelectorMultipleDTO>{Id:sangre.Id,Tipo:sangre.Tipo}
    })
    this.hospitalesnoSeleccionados = modelo.Hospitales.map(hospital =>{
      return<SelectorMultipleDTO>{Id:hospital.Id,Tipo:hospital.Tipo}
    })
  })

 }


  guardarpaciente(paciente: CrearPacienteDTO){
    // this.pacienteServices
    // this.pacienteServices.crear(paciente).subscribe({
    //   next:paciente =>{
    //     console.log(paciente)
    //     this.router.navigate(['/doctores'])
    //   }
    // })
    console.log(paciente)

  }
}
