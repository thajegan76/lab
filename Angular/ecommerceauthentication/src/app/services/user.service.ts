import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_ENDPOINT:string = "http://localhost:3000/users";
  private httpClient:HttpClient;

  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  public findAll():Observable<User[]> {
    return this.httpClient.get<User[]>(this.API_ENDPOINT);
  }

  public save(user:User):Observable<User> {
    return this.httpClient.post<User>(this.API_ENDPOINT, user);
  }

  public update(user:User):Observable<User> {
    return this.httpClient.put<User>(this.API_ENDPOINT + "/" + user.id, user);
  }

  public delete(id:number):Observable<User> {
    return this.httpClient.delete<User>(this.API_ENDPOINT + "/" + id);
  }

}
