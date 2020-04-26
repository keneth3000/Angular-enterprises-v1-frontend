import { IEmployees } from './Employees.interface';

export interface IEnterprises{
    _id?: string;
    name?:string;
    phone?:number;
    email?:string;
    address?:string;
    username?:string;
    password?:string;

    employees?:[{
        _id?:string;
        name:string;
        phoneNumber:string;
        charge:string;
        email:string;
        department:string
    }]
}