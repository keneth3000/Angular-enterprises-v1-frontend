import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'employees',
        loadChildren: () => import('../employees/list-employees/list-employees.module').then(m => m.ListEmployeesModule)
      },
      {
        path: 'enterprises',
        loadChildren: () => import('../enterprises/list-enterprises/list-enterprises.module').then(m => m.ListEnterprisesModule)
      }
    ]
  },
  {
    path: 'listEmployees/:id',
    loadChildren: () => import('../enterprises/list-enterprises-employees/list-enterprises-employees.module').then(m => m.ListEnterprisesEmployeesModule)
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
