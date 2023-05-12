import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_ENDPOINT:string = "http://localhost:3000/products";
  private httpClient:HttpClient;

  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  public findAll():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_ENDPOINT);
  }

}
