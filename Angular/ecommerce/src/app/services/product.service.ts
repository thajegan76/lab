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

  public save(product:Product):Observable<Product> {
    return this.httpClient.post<Product>(this.API_ENDPOINT, product);
  }

  public update(product:Product):Observable<Product> {
    return this.httpClient.put<Product>(this.API_ENDPOINT + "/" + product.id, product);
  }

  public delete(id:number):Observable<Product> {
    return this.httpClient.delete<Product>(this.API_ENDPOINT + "/" + id);
  }

}
