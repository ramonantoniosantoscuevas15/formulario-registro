import { Routes } from '@angular/router';
import { Pacientes } from './pacientes/pacientes';
import { Doctores } from './doctores/doctores';

export const routes: Routes = [
  {
    path:'',
    component:Pacientes
  },
  {
    path:'doctores',
    component:Doctores
  }
];
