import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';


const routes: Routes = [
  {
    path: '',
    component: ContainerAppComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./components/pages/inicio/inicio.module')
          .then(m => m.InicioModule)
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module')
      .then(m => m.AdminModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/auth/login/login.module')
      .then(m => m.LoginModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// { path: 'listemployees', loadChildren: () => import('./components/employees/list-employees/list-employees.module').then(m => m.ListEmployeesModule) }