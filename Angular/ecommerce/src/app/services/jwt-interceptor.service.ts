import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  private loginService:LoginService;
  private loginResponse?:LoginResponse;

  constructor(loginService:LoginService) { 
    loginService.loggedInSource.subscribe((loginResponse:LoginResponse) => {
      this.loginResponse = loginResponse;
    })
    this.loginService = loginService;    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.loginResponse !== undefined) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${ this.loginResponse.accessToken }`}        
      })
      return next.handle(req);
    } else {
      return next.handle(req);
    }    
  }



}
