import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormUtilidades } from '../utils/form-utilidades';
import { SelectorGenero } from "../selector-genero/selector-genero";
import { SelectorgeneroDTO } from '../selector-genero/selector-generomodelo';
import { SelectorMultiple } from "../componentes/selector-multiple/selector-multiple";
import { SelectorMultipleDTO } from '../componentes/selector-multiple/selector-multiplemodelo';
import { CrearPacienteDTO, PacienteDTO } from './pacientedto';
import moment from 'moment';
import { AutocompleDoctores } from "../doctores/autocomple-doctores/autocomple-doctores";
import { DoctorAutoCompleteDTO } from '../doctores/doctordto';
import { AutocompleHospitales } from "../hospitales/autocomple-hospitales/autocomple-hospitales";
import { HospitalAutocompleDTO } from '../hospitales/hospitalesdto';

@Component({
  selector: 'app-pacientes',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule, SelectorMultiple, AutocompleDoctores, AutocompleHospitales],
  templateUrl: './pacientes.html',
})
export class Pacientes implements OnInit{
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }

  }
  private fb = inject(FormBuilder)
  formutilidades = FormUtilidades
  @Input({required:true}) generoseleccionado!:SelectorMultipleDTO[]
  @Input({required:true}) generonoseleccionado!:SelectorMultipleDTO[]
  @Input({required:true}) estadoseleccionado!:SelectorMultipleDTO[]
  @Input({required:true}) estadonoseleccionado!:SelectorMultipleDTO[]
  @Input({required:true}) sangreseleccionada!:SelectorMultipleDTO[]
  @Input({required:true}) sangrenoseleccionada!:SelectorMultipleDTO[]
  @Input({required:true}) doctoresSeleccionados!:DoctorAutoCompleteDTO[]
  @Input({required:true}) hospitalesSeleccionados!:HospitalAutocompleDTO[]
  @Input() modelo?:PacienteDTO
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
    paciente.Doctores = this.doctoresSeleccionados
    this.postpaciente.emit(paciente)
  }
 }
