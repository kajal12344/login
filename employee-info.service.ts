import { IEmployeeInfo } from './../employeeinfo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  *  as  data  from  'src/assets/data/information.json';


@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {

  constructor(private http : HttpClient) { }

  getEmployees(): Observable<IEmployeeInfo[]>
  {
    return this.http.get<IEmployeeInfo[]>("/assets/data/information.json");
    //http://localhost:4200/assets/data/information.json
  }

  addEmployee(employee:IEmployeeInfo): any{
    // const headers = {'content-type':'application/json'};
    // const body = JSON.stringify(employee);
    return this.http.post("/assets/data/information.json",employee);
  }

}
