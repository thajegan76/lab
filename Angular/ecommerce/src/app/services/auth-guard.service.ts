import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  private loginService:LoginService;
  private router:Router;

  constructor(loginService:LoginService, router:Router) { 
    this.loginService = loginService;
    this.router = router;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.loginService.loggedInSource.pipe(map((loginResponse:LoginResponse): boolean | UrlTree => {
      if (loginResponse !== undefined)
        return true;
      else
        return this.router.parseUrl("/login")
    }))
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.loginService.loggedInSource.pipe(map((loginResponse:LoginResponse): boolean | UrlTree => {
      if (loginResponse !== undefined)
        return true;
      else
        return this.router.parseUrl("/login")
    }))
  }

}