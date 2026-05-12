import { Routes } from '@angular/router';
import { Pacientes } from './pacientes/pacientes';
import { Doctores } from './doctores/doctores';
import { FormularioDoctores } from './doctores/formulario-doctores/formulario-doctores';
import { AutocompleDoctores } from './doctores/autocomple-doctores/autocomple-doctores';

export const routes: Routes = [
  {
    path:'',
    component:Pacientes
  },
  {
    path:'doctores',
    component:AutocompleDoctores
  }
];
