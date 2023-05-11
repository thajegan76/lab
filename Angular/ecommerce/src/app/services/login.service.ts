import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_ENDPOINT:string = "http://localhost:3000/login";
  private httpClient:HttpClient;

  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  doLogin(credentials:Credentials):Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.API_ENDPOINT, credentials);
  }

}
