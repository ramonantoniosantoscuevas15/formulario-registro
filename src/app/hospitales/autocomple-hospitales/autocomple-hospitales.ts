import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { HospitalDTO } from '../hospitalesdto';
import { HospitalServices } from '../hospitalServices';

@Component({
  selector: 'app-autocomple-hospitales',
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, MatTableModule, MatInputModule,
        DragDropModule],
  templateUrl: './autocomple-hospitales.html',
})
export class AutocompleHospitales  {

  control = new FormControl()
  hospitales : HospitalDTO[] = [
    {Id:1,Tipo:'Mocoso Puello'},
    {Id:2,Tipo:'CEDIMAT'}
  ]
  hospitalServices = inject(HospitalServices)
  columnasAMostrar = ['id','nombre','acciones']
   @Input({required:true}) hospitalesSeleccionados: HospitalDTO[]=[]
  @ViewChild(MatTable) table!: MatTable<HospitalDTO>

  hospitarSeleccionado(event: MatAutocompleteSelectedEvent){
    this.hospitalesSeleccionados.push(event.option.value)
    this.control.patchValue('')
    if (this.table != undefined) {
      this.table.renderRows();
    }

  }

  finalizarArrastre(event: CdkDragDrop<any[]>){
    const indicePrevio = this.hospitalesSeleccionados.findIndex(hospital => hospital === event.item.data)
    moveItemInArray(this.hospitalesSeleccionados,indicePrevio, event.currentIndex)
    this.table.renderRows()
  }

  eliminar(hospital:HospitalDTO){
    const indice = this.hospitalesSeleccionados.findIndex((h: HospitalDTO)=>h.Id === hospital.Id)
    this.hospitalesSeleccionados.splice(indice,1)
    this.table.renderRows()
  }
}
