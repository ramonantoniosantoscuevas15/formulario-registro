import { Component, inject } from '@angular/core';
import { Pacientes } from "../pacientes";
import { CrearPacienteDTO } from '../pacientedto';
import { SelectorMultipleDTO } from '../../componentes/selector-multiple/selector-multiplemodelo';
import { DoctorAutoCompleteDTO } from '../../doctores/doctordto';
import { HospitalesDTO } from '../../hospitales/hospitalesdto';
import { PacienteServices } from '../pacienteServices';
import { Router } from '@angular/router';
import { SelectorDTO } from '../../componentes/selector/selectordto';

@Component({
  selector: 'app-formulario-pacientes',
  imports: [Pacientes],
  templateUrl: './formulario-pacientes.html',
})
export class FormularioPacientes {
  generoseleccionado:SelectorMultipleDTO[]=[]
  generonoseleccionado:SelectorMultipleDTO[]=[
    {Id:1,Tipo:'masculino'}


  ]
  estadoseleccionado:SelectorMultipleDTO[]=[]
  estadonoseleccionado:SelectorMultipleDTO[]=[
    {Id:1,Tipo:'Activo'},
    {Id:2,Tipo:'Innativo'}

]
  sangreseleccionada:SelectorMultipleDTO[]=[]
  sangrenoseleccionada:SelectorMultipleDTO[]=[
    {Id:1,Tipo:'A+'},
    {Id:2,Tipo:'A-'},
    {Id:3,Tipo:'B+'},
    {Id:4,Tipo:'AB+'},
    {Id:5,Tipo:'AB-'},
    {Id:6,Tipo:'O+'},
    {Id:7,Tipo:'O-'}

  ]
  doctoresSeleccionados:DoctorAutoCompleteDTO[]=[]
  hospitalesnoSeleccionados:HospitalesDTO[]=[
    {Id:1,Tipo:'mocoso puello'},
    {Id:2,Tipo:'Maternidad'}
  ]
  hospitalesSeleccionados:HospitalesDTO[]=[]

//   pacienteServices = inject(PacienteServices)
//   router = inject(Router);
// constructor(){
//   this.pacienteServices.crearGetgenero().subscribe(modelo =>{
//     this.generonoseleccionado = modelo.Generos.map(genero=>{
//       return<SelectorMultipleDTO>{Id:genero.Id,Tipo:genero.Tipo}
//     })
//   })

// }


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
