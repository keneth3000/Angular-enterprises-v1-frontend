import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEnterprisesComponent } from './list-enterprises.component';


const routes: Routes = [{ path: '', component: ListEnterprisesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEnterprisesRoutingModule { }
