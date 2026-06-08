import { Component, OnInit } from '@angular/core';
import { Listadopacientes } from "../pacientes/listadopacientes/listadopacientes";
import { DatePipe, LowerCasePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [ Listadopacientes],
  templateUrl: './dashboard.html',
})
export class Dashboard   {



  pacientes = [
    {
      nombre: 'Rafael Zapata',
        fechanacimiento: new Date('2016-05-03'),
        telefono: 1253649,
        email: 'R@gmail.com'
    },
    {
      nombre: 'Ronny Zapata',
        fechanacimiento: new Date('2017-05-03'),
        telefono: 1253659,
        email: 'ro@gmail.com'
    }

  ]
}
