import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEnterprisesEmployeesRoutingModule } from './list-enterprises-employees-routing.module';
import { ListEnterprisesEmployeesComponent } from './list-enterprises-employees.component';
import { MaterialModule } from '../../../material.module'

@NgModule({
  declarations: [ListEnterprisesEmployeesComponent],
  imports: [
    CommonModule,
    ListEnterprisesEmployeesRoutingModule,
    MaterialModule
  ]
})
export class ListEnterprisesEmployeesModule { }
