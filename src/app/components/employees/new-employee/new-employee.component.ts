import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { IEmployees } from '../../../shared/interface/Employees.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {

  constructor(
    private employeesService: EmployeesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newEmployeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    charge: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required)
  });

  //para guardara los empleados agregar recargo para mostrar empleados
  saveEmployees(data: IEmployees) {
    this.employeesService.savedEmployees(data)
      .subscribe((res) => {
          Swal.fire({
            title: 'Exitoso',
            text: 'Empleado agregado',
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          }).
          then((result)=>{
            if(result.value){
              location.reload()
            }
          })
      },
        (err:HttpErrorResponse) => {
          if (err.status === 402) {
            Swal.fire({
              title: 'Error',
              text: err.error.message,
              icon: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Ok'
            })
          }else if(err.status === 400){
            Swal.fire({
              title: 'Error',
              text: err.error.message,  //FIXME: cambiar mensaje en el backend por "El empleado ya exite"
              icon: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Ok'
            })
          }else if(err.status=== 404){
            Swal.fire({
              title: 'Error',
              text: err.error.message,
              icon: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Ok'
            })
          }else{
            Swal.fire({
              title: 'Error',
              text: 'Error del servidor :(',
              icon: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Ok'
            })
          }
        });

  }

}
