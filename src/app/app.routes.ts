import { Routes } from '@angular/router';
import { Pacientes } from './pacientes/pacientes';
import { Doctores } from './doctores/doctores';
import { FormularioDoctores } from './doctores/formulario-doctores/formulario-doctores';
import { AutocompleDoctores } from './doctores/autocomple-doctores/autocomple-doctores';
import { FormularioPacientes } from './pacientes/formulario-pacientes/formulario-pacientes';
import { Login } from './login/login';
import { FormularioLogin } from './login/formulario-login/formulario-login';
import { Dashboard } from './dashboard/dashboard';
import { BuscarPaciente } from './buscar-paciente/buscar-paciente';


export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },

  {
    path: 'doctores',
    component: FormularioDoctores
  },
  {
    path:'pacientes',
    component:FormularioPacientes
  },
  {
    path:'buscarpaciente',
    component:BuscarPaciente
  },
  {
    path: 'Login',
    component: FormularioLogin
  },
];
