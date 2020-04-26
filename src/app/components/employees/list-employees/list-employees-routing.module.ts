import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEmployeesComponent } from './list-employees.component';

const routes: Routes = [{ path: '', component: ListEmployeesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEmployeesRoutingModule { }
