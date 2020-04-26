// Angular
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

// Material
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
// Me components
import { EnterprisesService } from '../../../components/enterprises/enterprises.service';
import { IEnterprises } from '../../interface/Enterprises.interface';
import { ModalEnterprisesComponent } from '../modal-enterprises/modal-enterprises.component';
import { AuthService } from '../../auth.service';
import { ModalEnterprisesEmployeesComponent } from '../modal-enterprises-employees/modal-enterprises-employees.component';


@Component({
    selector: 'app-table-enterprises',
    templateUrl: './table-enterprises.component.html',
    styleUrls: ['./table-enterprises.component.scss'],
})

export class TableEnterprisesComponent implements OnInit, AfterViewInit {

    displayedColumns: string[] = ['name', 'email', 'phone', 'address', 'username', 'actions'];  
    dataSource = new MatTableDataSource();

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private enterprisesService: EnterprisesService, private dialog: MatDialog, private router: Router, private auth: AuthService) { }

    ngOnInit(): void {
        this.enterprisesService.getEnterprises()
            .subscribe((res) => {
                this.dataSource.data = res;
            });
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    onNewEnterprises() {
        this.openDialog();
    }

    onNewEE(idEE:IEnterprises){
        this.openDialogEE(idEE);
    }

    onDeleteEnterprises(id: string) {
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
                            this.enterprisesService.deleteEnterprises(id)
                                .subscribe((res) => {
                                    location.reload();
                                    localStorage.removeItem('token');
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
                                        } else if (err.status === 500) {
                                            Swal.fire({
                                                title: 'Error',
                                                text: `${err.error.message} :(`,
                                                icon: 'error',
                                                showCancelButton: false,
                                                confirmButtonColor: '#3085d6',
                                                confirmButtonText: 'Ok'
                                            })
                                        } else if(err.status === 403){
                                            Swal.fire({
                                                title: 'Error',
                                                text: err.error.message,
                                                icon: 'error',
                                                showCancelButton: false,
                                                confirmButtonColor: '#3085d6',
                                                confirmButtonText: 'Ok'
                                            })
                                        }
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

    onEditEnterprises(enterprises: IEnterprises) {
        this.openDialog(enterprises);
    }

    onList(id:string){
       this.router.navigate([`admin/listEmployees`, id]);
    }

    openDialog(enterprises?: IEnterprises): void {
        const config = {
            data: {
                message: enterprises ? 'Editar empresa' : 'Nueva empresa',
                content: enterprises
            },
        };
        const dialogRef = this.dialog.open(ModalEnterprisesComponent, config);
        dialogRef.afterClosed();
    }

    openDialogEE(enterprises?:IEnterprises):void{
        const config = {
            data:{
                message: enterprises ? 'Editar empleado': 'Agregar nuevo empleado',
                content:enterprises
            },
        };
        const dialgoRef = this.dialog.open(ModalEnterprisesEmployeesComponent, config);
        dialgoRef.afterClosed();
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
