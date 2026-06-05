import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BuscarPacientes } from './buscarpacientes';

@Component({
  selector: 'app-buscar-paciente',
  imports: [],
  templateUrl: './buscar-paciente.html',
})
export class BuscarPaciente {
  escribirparametrosbusquedaenurl(valores: BuscarPacientes){
    let queryString = []
    if(valores.nombre){
      queryString.push(`nombre=${encodeURIComponent(valores.nombre)}`)
    }
    if(valores.estadoId !==0){
      queryString.push(`estadoId=${valores.estadoId}`)
    }
    

  }


  leervaloresurl(){
    this.activatedRoute.queryParams.subscribe((params: any)=>{
      var objeto: any = {}
      if(params.nombre){
        objeto.nombre = params.nombre
      }
      if(params.telefono){
        objeto.telefono = params.telefono
      }
      if(params.direccion){
        objeto.direccion = params.direccion
      }
      if(params.estadoId){
        objeto.estadoId = Number(objeto.estadoId)
      }
      this.form.patchValue(objeto)
    })
  }


  private formBuilder = inject(FormBuilder)
  private location = inject(Location)
  private activatedRoute = inject(ActivatedRoute)

  form = this.formBuilder.group({
    nombre:'',
    telefono:0,
    direccion:'',
    estadoId:0

  })
  estado =[
    {id:1,tipo:"Activo"},
    {id:2,tipo:"Inactivo"}
  ]

  pacienteOriginal = [{
    nombre:'Juan Luis',
    fechanacimiento: new Date('2016-05-03'),
    telefono: 8095531633,
    direccion:'por hay',
    estado:[1]
  },
  {
    nombre:'Karina Perez',
    fechanacimiento: new Date('2016-05-03'),
    telefono: 8095531600,
    direccion:'por hay al lado de su casa',
    estado:[2]

  }
]
pacientes=this.pacienteOriginal
}
