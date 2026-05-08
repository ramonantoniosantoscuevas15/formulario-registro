import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormUtilidades } from '../utils/form-utilidades';

@Component({
  selector: 'app-doctores',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule,],
  templateUrl: './doctores.html',
})
export class Doctores {
  private fb = inject(FormBuilder)
  formutilidades = FormUtilidades
  form = this.fb.group({
    Nombre:['', { validators: [Validators.required, Validators.minLength(3)] }],
    Especialidad:['', { validators: [Validators.required, Validators.minLength(3)] }]
  })
}
