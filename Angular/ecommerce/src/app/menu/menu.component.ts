import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../models/login-response';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public loginResponse?:LoginResponse;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.loggedInSource.subscribe((loginResponse:LoginResponse) => {
      this.loginResponse = loginResponse;
    })
  }

}
