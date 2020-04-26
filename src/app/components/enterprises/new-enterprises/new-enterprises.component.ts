import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IEnterprises } from 'src/app/shared/interface/Enterprises.interface';
import { EnterprisesService } from '../enterprises.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-enterprises',
  templateUrl: './new-enterprises.component.html',
  styleUrls: ['./new-enterprises.component.scss']
})
export class NewEnterprisesComponent implements OnInit {
  hide = true;

  constructor(private enterpriseService: EnterprisesService, private router: Router) { }

  ngOnInit(): void {
  }

  //Formulario reactivo
  newEnterprisesForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  //Funcion de guardar empleados
  saveEnterprises(data: IEnterprises) {

    this.enterpriseService.saveEnterprises(data)
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
        if (err.status === 402) {
          Swal.fire({
            title: 'Error',
            text: err.error.message,
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          });
        }
      });
  }

}

