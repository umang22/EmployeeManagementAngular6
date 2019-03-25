import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private httpClient:HttpClient) { }

  getEmployees(){
    console.log("Get method call ....");
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees/');
  }
  deleteEmployee(employee){
    console.log("delete method call");
    return this.httpClient.delete<Employee>("http://localhost:8080/emloyees/"+"/"+employee.empId);
  }

  createEmployee(employee){
    console.log("Create method call");
    return this.httpClient.post<Employee>("http://localhost:8080/employees/",employee);
  }
}


