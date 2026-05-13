import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { HospitalAutocompleDTO } from '../hospitalesdto';
import { HospitalServices } from '../hospitalServices';

@Component({
  selector: 'app-autocomple-hospitales',
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, MatTableModule, MatInputModule,
        DragDropModule],
  templateUrl: './autocomple-hospitales.html',
})
export class AutocompleHospitales implements OnInit {
  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor =>{
      if(typeof valor === 'string' && valor){
        this.hospitalServices.obtenerporNombre(valor).subscribe(hospital =>{
          this.hospitales = hospital
        })
      }
    })
  }
  control = new FormControl()
  hospitales : HospitalAutocompleDTO[] = []
  hospitalServices = inject(HospitalServices)
  columnasAMostrar = ['Nombre','acciones']
   @Input({required:true}) hospitalesSeleccionados: HospitalAutocompleDTO[]=[]
  @ViewChild(MatTable) table!: MatTable<HospitalAutocompleDTO>

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

  eliminar(hospital:HospitalAutocompleDTO){
    const indice = this.hospitalesSeleccionados.findIndex((h: HospitalAutocompleDTO)=>h.Id === h.Id)
    this.hospitalesSeleccionados.splice(indice,1)
    this.table.renderRows()
  }
}
