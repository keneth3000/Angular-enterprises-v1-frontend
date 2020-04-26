import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEnterprises } from '../../shared/interface/Enterprises.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IEmployees } from 'src/app/shared/interface/Employees.interface';

@Injectable({
    providedIn: 'root',
})
export class EnterprisesService implements OnInit {
    private URI = 'http://localhost:3000/control';
    selectedEnterprise: IEnterprises;

    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {
        //this.getEnterprises();
    }

    getEnterprises(): Observable<IEnterprises[]> {
        const url = `${this.URI}/listEnterprise`;
        return this.http.get<IEnterprises[]>(url)
            .pipe(map((res: any) => {
                return res.enterprises;
            }));
    }

    listEmployeesEnterprises(id:string){
        return this.http.get(`${this.URI}/employeesTotal/${id}`)
            .pipe(map((res:any)=>{
                return res.Employees;
            }));
    }

    saveEnterprises(enterprises: IEnterprises) {
        return this.http.post(`${this.URI}/saveEnterprise`, enterprises);
    }

    updateEnterprises(id: string, element: IEnterprises) {
        return this.http.put(`${this.URI}/updateEnterprise/${id}`, element);
    }

    deleteEnterprises(enterpriseId: string) {
        return this.http.delete(`${this.URI}/deleteEnterprice/${enterpriseId}`)
            .pipe(map((res: any) => {
                res.enterprisesDeleted;
            }));
    }

    saveEmployeEnterprise(enterprises:IEnterprises, enterprisesId:string){
        return this.http.put(`${this.URI}/addEmployee/${enterprisesId}`, enterprises);
    }

    deleteEmployeEnterprise(enterpriseId:string, employeId:string, element:IEmployees){
        return this.http.put(`${this.URI}/removeEmployee/${enterpriseId}/${employeId}`, element);
    }

    updateEnterprisesEmployee(enterprisesId:string, element:IEmployees, employeeId:string){
        return this.http.put(`${this.URI}/updateEidmployee/${enterprisesId}/${employeeId}`, element)
    }

}

/*TODO: al terminar poner todas la rutas en una sola variable propia del elemento */