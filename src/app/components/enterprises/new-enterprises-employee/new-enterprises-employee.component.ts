//Angular
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

//Material
import Swal from 'sweetalert2';

//Me components
import { IEnterprises } from '../../../shared/interface/Enterprises.interface';
import { EnterprisesService } from '../enterprises.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-enterprises-employee',
  templateUrl: './new-enterprises-employee.component.html',
  styleUrls: ['./new-enterprises-employee.component.scss']
})


export class NewEnterprisesEmployeeComponent implements OnInit {

  @Input() enterprises: IEnterprises;

  constructor(private enterpriseService: EnterprisesService, private auth:AuthService, private _router:Router) { }

  newEnterprisesE = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    charge: new FormControl(''),
    department: new FormControl('')
  })

  ngOnInit(): void {
    this.initValuesForm();
  }

  saveEnterprisesE(dataEE: IEnterprises) {
    const verify = this.auth.loggedIn();

    const idE = this.enterprises._id; //obtiene el id de la empresa
    
    if(verify){
      this.enterpriseService.saveEmployeEnterprise(dataEE, idE)
      .subscribe((res) => {
        Swal.fire({
          title: 'Exitoso',
          text: 'Empresa agregada',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.value) {
            location.reload();
          }
        })
      }, (err: HttpErrorResponse) => {  // Interfaz para los errores http
        if (err.status === 401) {
          Swal.fire({
            title: 'Error',
            text: err.error.message,
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          });
        } else if (err.status === 404) {
          Swal.fire({
            title: 'Error',
            text: err.error.message,
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          });
        } else if (err.status === 406) {
          Swal.fire({
            title: 'Error',
            text: err.error.message,
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          });
        } else if (err.status === 418) {
          Swal.fire({
            title: 'Error',
            text: err.error.message,
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          });
        } else{
          Swal.fire({
            title: 'Error',
            text: err.error.message,
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          });
        }
      })
    }else{
      this._router.navigate(['/login']);
    }
  }

  private initValuesForm(): void {
    this.newEnterprisesE.patchValue({
      id: this.enterprises._id, //inicializo para obtener el id
    });
  }

}
