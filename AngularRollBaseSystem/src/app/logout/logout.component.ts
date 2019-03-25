import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  username : '';
  password : '';

  constructor(private athentication:AuthenticationService,private rotuer:Router) { }

  ngOnInit() {
    this.athentication.logout();
    this.rotuer.navigate(['/login']);
  }
}
