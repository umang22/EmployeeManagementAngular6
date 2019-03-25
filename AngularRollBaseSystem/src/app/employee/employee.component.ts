import { Component, OnInit } from '@angular/core';
import {HttpClientService, Employee} from "../service/http-client.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private httpClienService:HttpClientService) { }

  employees:Employee[];

  ngOnInit() {
    this.httpClienService.getEmployees().subscribe(
      response =>{this.employees = response},
    );
  }

  deleteEmployee(employee : Employee): void{
    this.httpClienService.deleteEmployee(employee).subscribe(
      data=>{this.employees = this.employees.filter(u => u !== employee)}
    )
  }

}
