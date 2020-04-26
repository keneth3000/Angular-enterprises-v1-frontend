/**
 * Tabla de empleados
 */

//Angular
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'

//Material
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModalComponent } from "../modal/modal.component";

//Me
import { EmployeesService } from '../../../components/employees/employees.service';
import { IEmployees } from '../../interface/Employees.interface';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'charge', 'department', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private employeeService: EmployeesService,
    public dialog: MatDialog,
    private router: Router) {
  }

  ngOnInit() {
    this.employeeService.getEmployee()
      .subscribe(res => this.dataSource.data = res);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onEditEmployee(post: IEmployees) {
    this.openDialog(post);
  }

  //Funcion de buscar, completada
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Funcion de eliminar, completada agregar recargo para mostrar empleados
  onDeleteEmployee(id: string) {
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
            this.employeeService.deleteEmployee(id)
              .subscribe((res) => {
                location.reload();
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
                  } else if (err.status === 403) {
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
  }

  //funcion de nuevo empleado con opendialgo, completada
  onNewEmployee() {
    this.openDialog();
  }

  openDialog(employee?: IEmployees): void {
    const config = {
      data: {
        message: employee ? 'Editar Empleado' : 'Agregar empleado',
        content: employee
      },
    };
    const diaglogREf = this.dialog.open(ModalComponent, config);
    diaglogREf.afterClosed();
  }

}
