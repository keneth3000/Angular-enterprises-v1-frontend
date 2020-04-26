import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IEnterprises } from '../../../shared/interface/Enterprises.interface';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { EnterprisesService } from '../enterprises.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-enterprises',
  templateUrl: './edit-enterprises.component.html',
  styleUrls: ['./edit-enterprises.component.scss']
})
export class EditEnterprisesComponent implements OnInit {
  @Input() enterprises: IEnterprises;
  constructor(private enterprisesService: EnterprisesService, private auth: AuthService, private router:Router) { }

  editEnterpriseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
  }

  editEnterprises(enterprisesUpdate: IEnterprises) {
    const verify = this.auth.loggedIn();
    const id = this.enterprises._id;

    if(verify){

    this.enterprisesService.updateEnterprises(id, enterprisesUpdate)
    .subscribe((res) => {
      Swal.fire({
        title: 'Exitoso',
        text: 'Empleado editado',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.value) {
          location.reload();
        }
      })
    },
      (err: HttpErrorResponse) => {
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
    }else{
      this.router.navigate(['/login']);
    }
  }

  private initValuesForm(): void {
    this.editEnterpriseForm.patchValue({
      id: this.enterprises._id,
      name: this.enterprises.name,
      email: this.enterprises.email,
      phone: this.enterprises.phone,
      address: this.enterprises.address,
      username: this.enterprises.username
    });
  }

}
