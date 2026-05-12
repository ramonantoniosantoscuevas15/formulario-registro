import { Component, inject } from '@angular/core';
import { Doctores } from "../doctores";
import { DoctorServices } from '../doctorServices';
import { Router } from '@angular/router';
import { CrearDoctorDTO } from '../doctordto';

@Component({
  selector: 'app-formulario-doctores',
  imports: [Doctores],
  templateUrl: './formulario-doctores.html',
})
export class FormularioDoctores {
  private doctorservices = inject(DoctorServices)
  private router = inject(Router)

  guardarDoctores(doctor: CrearDoctorDTO){
    this.doctorservices.crear(doctor).subscribe({
      next: doctor =>{
        console.log(doctor)
        this.router.navigate(['/'])
      }
    })

  }
}
