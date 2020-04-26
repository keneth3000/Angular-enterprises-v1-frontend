import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IEmployees } from '../../shared/interface/Employees.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  URI = 'http://localhost:3000/control'
  selectedEmployee: IEmployees;

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployees[]> {
    const url = `${this.URI}/listEmployees`
    return this.http.get<IEmployees[]>(url)
      .pipe(map((res: any) => {
        return res.employees
      }
      ));
  }


  savedEmployees(employee: IEmployees) {
    const url = `${this.URI}/saveEmployee`
    return this.http.post(url, employee)
      .pipe(map((res: any) => {
        res.employee
      }));
  }


  deleteEmployee(employeeID: string) {
    return this.http.delete(`${this.URI}/deleteEmployees/${employeeID}`)
      .pipe(map((res: any) => {
        res.message;
      }));
  }

  updateEmployee(id: string, element: IEmployees) {
    return this.http.put(`${this.URI}/editeEmployees/${id}`, element);
  }

  employeesTotal() {
    return this.http.get(`${this.URI}/employeesTotal`)
  }

}
