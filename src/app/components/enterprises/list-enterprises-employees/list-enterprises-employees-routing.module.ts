import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEnterprisesEmployeesComponent } from './list-enterprises-employees.component';

const routes: Routes = [{ path: '', component: ListEnterprisesEmployeesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEnterprisesEmployeesRoutingModule { }
