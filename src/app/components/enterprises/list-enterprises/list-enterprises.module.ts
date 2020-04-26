import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEnterprisesRoutingModule } from './list-enterprises-routing.module';
import { ListEnterprisesComponent } from './list-enterprises.component'
import { MaterialModule } from '../../../material.module'
import { TableEnterprisesComponent } from '../../../shared/components/table-enterprises/table-enterprises.component'

@NgModule({
  declarations: [ListEnterprisesComponent, TableEnterprisesComponent],
  imports: [
    CommonModule,
    ListEnterprisesRoutingModule,
    MaterialModule
  ]
})
export class ListEnterprisesModule { }
