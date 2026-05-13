import { Routes } from '@angular/router';
import { Pacientes } from './pacientes/pacientes';
import { Doctores } from './doctores/doctores';
import { FormularioDoctores } from './doctores/formulario-doctores/formulario-doctores';
import { AutocompleDoctores } from './doctores/autocomple-doctores/autocomple-doctores';
import { FormularioPacientes } from './pacientes/formulario-pacientes/formulario-pacientes';

export const routes: Routes = [
  {
    path:'',
    component:FormularioPacientes
  },
  {
    path:'doctores',
    component:AutocompleDoctores
  }
];
