import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BuscarPacientes } from './buscarpacientes';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Listadopacientes } from "../pacientes/listadopacientes/listadopacientes";
import { Location } from '@angular/common';

@Component({
  selector: 'app-buscar-paciente',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, Listadopacientes],
  templateUrl: './buscar-paciente.html',
})
export class BuscarPaciente implements OnInit {
  ngOnInit(): void {
    this.leervaloresurl()
    this.buscarpacientesurl(this.form.value as BuscarPacientes)
    this.form.valueChanges.subscribe(valores => {

      this.paciente = this.pacienteOriginal
      this.buscarpacientesurl(valores as BuscarPacientes)
      this.escribirparametrosbusquedaenurl(valores as BuscarPacientes)



    })
  }
  buscarpacientesurl(valores: BuscarPacientes) {
    if (valores.nombre) {
      this.paciente = this.paciente.filter(paciente => paciente.nombre.indexOf(valores.nombre) !== -1)
    }
    if (valores.estadoId !== 0) {
      this.paciente = this.paciente.filter(paciente => paciente.estados.indexOf(valores.estadoId) !== -1)

    }



  }
  escribirparametrosbusquedaenurl(valores: BuscarPacientes) {
    let queryString = []
    if (valores.nombre) {
      queryString.push(`nombre=${encodeURIComponent(valores.nombre)}`)
    }
    if (valores.estadoId !== 0) {
      queryString.push(`estadoId=${valores.estadoId}`)
    }
    this.location.replaceState('buscarpaciente', queryString.join('&'))



  }


  leervaloresurl() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      var objeto: any = {}
      if (params.nombre) {
        objeto.nombre = params.nombre
      }

      if (params.estadoId) {
        objeto.estadoId = Number(params.estadoId)
      }
      this.form.patchValue(objeto)
    })
  }


  private formBuilder = inject(FormBuilder)
  private location = inject(Location)
  private activatedRoute = inject(ActivatedRoute)

  form = this.formBuilder.group({
    nombre: '',

    estadoId: 0

  })
  estados = [
    { id: 1, tipo: "Activo" },
    { id: 2, tipo: "Inactivo" }
  ]

  pacienteOriginal = [{
    nombre: 'Rafael Zapata',
    fechanacimiento: new Date('2016-05-03'),
    telefono: 1253649,
    email: 'R@gmail.com',
    estados: [1]

  },
  {
    nombre: 'Ronny Zapata',
    fechanacimiento: new Date('2017-05-03'),
    telefono: 1253659,
    email: 'ro@gmail.com',
    estados: [2]



  },
  {
    nombre: "Awilda Cuevas",
    fechanacimiento: new Date('2017-05-03'),
    telefono: 1253659,
    email: 'a@gmail.com',
    estados: [1]



  }
  ]
  paciente = this.pacienteOriginal
}
