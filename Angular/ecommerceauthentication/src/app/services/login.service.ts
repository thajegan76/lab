import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Credentials } from '../models/credentials';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_ENDPOINT:string = "http://localhost:3000/login";
  private httpClient:HttpClient;
  private _loggedInStore:BehaviorSubject<any> = new BehaviorSubject(undefined);
  public loggedInSource:Observable<LoginResponse> = this._loggedInStore.asObservable();

  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  set loggedInStore(loginResponse:LoginResponse) {
    this._loggedInStore.next(loginResponse);
  }

  doLogin(credentials:Credentials):Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.API_ENDPOINT, credentials);
  }

  doLogout() {
    this._loggedInStore.next(undefined);
  }

}
