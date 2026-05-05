import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-pacientes',
  imports: [MatFormFieldModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './pacientes.html',
})
export class Pacientes { }
