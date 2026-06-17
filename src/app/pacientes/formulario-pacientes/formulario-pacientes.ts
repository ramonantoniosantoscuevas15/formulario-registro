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
  imports: [Pacientes],
  templateUrl: './formulario-pacientes.html',
})
export class FormularioPacientes {


 //pacienteServices = inject(PacienteServices)
 router = inject(Router);
 constructor(){


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
