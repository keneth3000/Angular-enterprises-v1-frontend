//Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

//Material
import Swal from 'sweetalert2';

//Me components
import { EnterprisesService } from '../enterprises.service';
import { IEmployees } from 'src/app/shared/interface/Employees.interface';
import { AuthService } from '../../../shared/auth.service';
import { ModalEnterprisesEmployeesComponent } from 'src/app/shared/components/modal-enterprises-employees/modal-enterprises-employees.component';
import { MatDialog } from '@angular/material/dialog';
import { IEnterprises } from 'src/app/shared/interface/Enterprises.interface';

@Component({
  selector: 'app-list-enterprises-employees',
  templateUrl: './list-enterprises-employees.component.html',
  styleUrls: ['./list-enterprises-employees.component.scss']
})
export class ListEnterprisesEmployeesComponent implements OnInit {

  id: string;
  empresa: IEmployees[];

  constructor(private _enterprisesService: EnterprisesService, private _router: ActivatedRoute, private auth:AuthService, private router:Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this._router.snapshot.paramMap.get('id');
    this.listEmployees();
  }

  listEmployees() {
    this._enterprisesService.listEmployeesEnterprises(this.id)
      .subscribe((res: any) => {
        this.empresa = res
      });
  }

  onDeleteEmployeeEnterprise(id:string, element:IEmployees) {
    const verify = this.auth.loggedIn();

    if (verify) { //compruebo si exite el token en el localStorage

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success m-2',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: '¿Seguro desea eliminar?',
        text: "¡Esta opcion es definitiva!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar.',
        cancelButtonText: 'No, cancelar.',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            'Eliminado',
            'Empresa eliminada.',
            'success'
          ).then((result) => {
            if (result.value) {
              this. _enterprisesService.deleteEmployeEnterprise(this.id, id, element)
                .subscribe((res) => {
                  location.reload();
                  localStorage.removeItem('token');
                },
                  (err) => {
                    console.log(err);
                  })
            }
          })
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Empresa segura.',
            'error'
          )
        }
      });
    } else {
      this.router.navigate(['/login']);
    }
  } 

}

