import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';
import { NewSpecialityComponent } from './new-speciality/new-speciality.component';



@NgModule({
  declarations: [SpecialityListComponent, NewSpecialityComponent],
  imports: [
    CommonModule
  ]
})
export class SpecialityModule { }
