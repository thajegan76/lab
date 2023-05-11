import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private API_ENDPOINT:string = "http://localhost:3000/shoppingcart";
  private httpClient:HttpClient;

  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  public findAll():Observable<CartItem[]> {
    return this.httpClient.get<CartItem[]>(this.API_ENDPOINT);
  }

  // the id of cartItem parameter is going to be 0
  // the return observable will have cartItem which will have the new id
  public save(cartItem:CartItem):Observable<CartItem> {
    return this.httpClient.post<CartItem>(this.API_ENDPOINT, cartItem);
  }

  public update(cartItem:CartItem):Observable<CartItem> {
    return this.httpClient.put<CartItem>(this.API_ENDPOINT + "/" + cartItem.id, cartItem);
  }

  public delete(id:number):Observable<CartItem> {
    return this.httpClient.delete<CartItem>(this.API_ENDPOINT + "/" + id);
  }

}
