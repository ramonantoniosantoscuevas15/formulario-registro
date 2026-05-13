import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { DoctorAutoCompleteDTO } from '../doctordto';
import { DoctorServices } from '../doctorServices';

@Component({
  selector: 'app-autocomple-doctores',
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, MatTableModule, MatInputModule,
        DragDropModule],
  templateUrl: './autocomple-doctores.html',
})
export class AutocompleDoctores implements OnInit  {
  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor =>{
      if(typeof valor === 'string' && valor){
        this.doctoresServices.obtenerporNombre(valor).subscribe(doctor =>{
          this.doctores = doctor
        })
      }
    })
  }


  control = new FormControl()
  doctores : DoctorAutoCompleteDTO[]=[]
  doctoresServices = inject(DoctorServices)

  @Input({required:true})
  doctoresSeleccionados: DoctorAutoCompleteDTO[]=[]

  columnasAMostrar =['Nombre','Especialidad','Acciones']

  @ViewChild(MatTable) table!: MatTable<DoctorAutoCompleteDTO>

  doctorSeleccionado(event: MatAutocompleteSelectedEvent){
    this.doctoresSeleccionados.push(event.option.value)
    this.control.patchValue('')

    if(this.table != undefined){
      this.table.renderRows()
    }

  }

  finalizarArrastre(event:CdkDragDrop<any[]>){
    const indicePrevio = this.doctoresSeleccionados.findIndex(doctor => doctor === event.item.data)
     moveItemInArray(this.doctoresSeleccionados,indicePrevio,event.currentIndex)
     this.table.renderRows()
  }

  eliminar(doctor:DoctorAutoCompleteDTO){
    const indice = this.doctoresSeleccionados.findIndex((d: DoctorAutoCompleteDTO) => d.Id === doctor.Id)
    this.doctoresSeleccionados.splice(indice,1)
    this.table.renderRows()
  }
}
