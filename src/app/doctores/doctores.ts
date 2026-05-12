import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormUtilidades } from '../utils/form-utilidades';
import { NgxPrintDirective, NgxPrintModule } from 'ngx-print';
import { CrearDoctorDTO } from './doctordto';


@Component({
  selector: 'app-doctores',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule,NgxPrintModule],
  templateUrl: './doctores.html',
})
export class Doctores {
  private fb = inject(FormBuilder)
  formutilidades = FormUtilidades
  @Output() postdoctores = new EventEmitter<CrearDoctorDTO>()
  form = this.fb.group({
    Nombre:['', { validators: [Validators.required, Validators.minLength(3)] }],
    Especialidad:['', { validators: [Validators.required, Validators.minLength(3)] }]
  })
  guardarDoctores(){
    const doctor = this.form.value as CrearDoctorDTO
    this.postdoctores.emit(doctor)
  }
}
