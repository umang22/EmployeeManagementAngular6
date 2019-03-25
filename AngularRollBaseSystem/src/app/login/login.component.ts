import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: 'haysuser';
  password: 'haysuser';
  inValidLogin = false;

  constructor(private router: Router, private loginService: AuthenticationService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginService.authenticate(this.username, this.password)) {
      this.router.navigate(['']);
      this.inValidLogin = false;
    }
    else
      this.inValidLogin = true;
  }
}
