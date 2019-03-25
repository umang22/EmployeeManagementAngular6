import {Component, OnInit} from "@angular/core";
import {Employee, HttpClientService} from "../service/http-client.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private httpClientService: HttpClientService) {
  }

  user: Employee = new Employee("", "", "", "");

  ngOnInit() {

  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user).subscribe(data => {
      alert("Employee Created Successfully")
    });
  }

}
