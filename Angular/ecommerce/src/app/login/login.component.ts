import { Component, OnInit } from '@angular/core';
import { Credentials } from '../models/credentials';
import { LoginResponse } from '../models/login-response';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public message:string;
  public credentials:Credentials;
  public loginService:LoginService;
  public loginResponse?:LoginResponse;

  constructor(loginService:LoginService) { 
    this.message = "";
    this.credentials = new Credentials("", "");
    this.loginService = loginService;
  }

  ngOnInit(): void {
  }

  doLogin() {
    this.loginService.doLogin(this.credentials).subscribe({
      next: (loginResponse:LoginResponse) => {
        this.loginResponse = loginResponse;
      },
      error: (error:any) => {
        this.message = error.error;
      }
    })
  }

  doLogout() {
    this.credentials = new Credentials("", "");
    this.loginResponse = undefined;
  }

}
