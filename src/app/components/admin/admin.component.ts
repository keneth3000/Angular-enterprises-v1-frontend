import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees/employees.service';
import { Observable } from 'rxjs';
import { IEmployees } from 'src/app/shared/interface/Employees.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public opened = false;

  constructor(private employeeService:EmployeesService) { }
  
  ngOnInit(): void {    
  }
  

}
