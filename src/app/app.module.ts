//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//ME
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewEmployeeModule } from './components/employees/new-employee/new-employee.module';
import { EditEmployeeModule } from './components/employees/edit-employee/edit-employee.module';
import { NewEnterprisesModule } from './components/enterprises/new-enterprises/new-enterprises.module';
import { EditEnterprisesModule } from './components/enterprises/edit-enterprises/edit-enterprises.module';
import { NewEnterprisesEmployeeModule } from './components/enterprises/new-enterprises-employee/new-enterprises-employee.module';

import { NewEmployeeComponent } from './components/employees/new-employee/new-employee.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { NewEnterprisesComponent } from './components/enterprises/new-enterprises/new-enterprises.component';
import { EditEnterprisesComponent } from './components/enterprises/edit-enterprises/edit-enterprises.component';
import { ModalEnterprisesComponent } from './shared/components/modal-enterprises/modal-enterprises.component';
import { NewEnterprisesEmployeeComponent } from './components/enterprises/new-enterprises-employee/new-enterprises-employee.component';
import { ModalEnterprisesEmployeesComponent } from './shared/components/modal-enterprises-employees/modal-enterprises-employees.component'

import { authInterceptorProviders } from './shared/token-interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        NewEmployeeComponent,
        NavigationComponent,
        ContainerAppComponent,
        ModalComponent,
        EditEmployeeComponent,
        NewEnterprisesComponent,
        EditEnterprisesComponent,
        ModalEnterprisesComponent,
        NewEnterprisesEmployeeComponent,
        ModalEnterprisesEmployeesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        NewEmployeeModule,
        EditEmployeeModule,
        NewEnterprisesModule,
        NewEnterprisesEmployeeModule,
        EditEnterprisesModule
    ],
    providers: [authInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule { }
