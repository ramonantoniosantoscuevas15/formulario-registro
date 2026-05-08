import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormUtilidades } from '../utils/form-utilidades';
import { SelectorGenero } from "../selector-genero/selector-genero";
import { SelectorgeneroDTO } from '../selector-genero/selector-generomodelo';
import { SelectorMultiple } from "../componentes/selector-multiple/selector-multiple";
import { SelectorMultipleDTO } from '../componentes/selector-multiple/selector-multiplemodelo';
import { CrearPacienteDTO } from './pacientedto';
import moment from 'moment';

@Component({
  selector: 'app-pacientes',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule,  SelectorMultiple],
  templateUrl: './pacientes.html',
})
export class Pacientes {
  private fb = inject(FormBuilder)
  formutilidades = FormUtilidades
  @Input({required:true}) generoseleccionado!:SelectorMultipleDTO[]
  @Input({required:true}) generonoseleccionado!:SelectorMultipleDTO[]
  @Input({required:true}) estadoseleccionado!:SelectorMultipleDTO[]
  @Input({required:true}) estadonoseleccionado!:SelectorMultipleDTO[]
  @Input({required:true}) sangreseleccionada!:SelectorMultipleDTO[]
  @Input({required:true}) sangrenoseleccionada!:SelectorMultipleDTO[]
  @Output() postpaciente = new EventEmitter<CrearPacienteDTO>()

  form = this.fb.group({
    Nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    FechaNacimiento: new FormControl<Date | null>(null),
    Cedula: [0, [Validators.required, Validators.min(2)]],
    Correo: ['',[Validators.required,Validators.pattern(this.formutilidades.emailPattern)]],
    Telefono: [0, [Validators.required, Validators.min(2)]],
    Direccion: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    Alegias: [''],
    NotasMedicas:[''],
    NombreContacto:['',{ validators: [Validators.required, Validators.minLength(3)] }],
    TelefonoContacto:[0, [Validators.required, Validators.min(2)]],

  })

  guardarpaciente(){
    const paciente = this.form.value as CrearPacienteDTO
    paciente.FechaNacimiento = moment(paciente.FechaNacimiento).toDate()
    const generoId = this.generoseleccionado.map(val => val.Id)
    const estadoId = this.estadoseleccionado.map(val => val.Id)
    const sangreId = this.sangreseleccionada.map(val => val.Id)
    paciente.GeneroId = generoId
    paciente.EstadoId = estadoId
    paciente.SangreId = sangreId
    this.postpaciente.emit(paciente)
  }
 }
