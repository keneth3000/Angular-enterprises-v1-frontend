import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { IEmployees } from 'src/app/shared/interface/Employees.interface';
import { EmployeesService } from '../employees.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  @Input() employee: IEmployees;
  constructor(private employeeService: EmployeesService) { }

  editEmployeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    charge: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.initValuesForm();
  }

  editEmploye(employeeUpdate: IEmployees) {
    this.employeeService.updateEmployee(this.employee._id, employeeUpdate)
      .subscribe((res) => {
        Swal.fire({
          title: 'Exitoso',
          text: 'Empleado editado',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        }).then((result)=>{
          if(result.value){
            location.reload();
          }
        })
      },
        (err:HttpErrorResponse) => {
          if (err.status === 404) {
            Swal.fire({
              title: 'Error',
              text: err.error.message,
              icon: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Ok'
            })
          } else {
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

  private initValuesForm(): void {
    this.editEmployeeForm.patchValue({
      id: this.employee._id,
      name: this.employee.name,
      email: this.employee.email,
      phoneNumber: this.employee.phoneNumber,
      charge: this.employee.charge,
      department: this.employee.department
    });
  }


}
