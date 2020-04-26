import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEmployeesRoutingModule } from './list-employees-routing.module';
import { ListEmployeesComponent } from './list-employees.component';
import { MaterialModule } from '../../../material.module';
import { TableComponent } from '../../../shared/components/table/table.component';

@NgModule({
  declarations: [ListEmployeesComponent, TableComponent],
  imports: [
    CommonModule,
    ListEmployeesRoutingModule,
    MaterialModule
  ]
})
export class ListEmployeesModule { }
