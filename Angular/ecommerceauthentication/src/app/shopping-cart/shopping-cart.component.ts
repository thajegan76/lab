import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public message:string;
  public shoppingCart:CartItem[];
  public shoppingCartService:ShoppingCartService;
  public shoppingCartService$?:Subscription;
  
  constructor(shoppingCartService:ShoppingCartService) { 
    this.message = "";
    this.shoppingCart = [];
    this.shoppingCartService = shoppingCartService;
  }

  ngOnInit(): void {
    this.shoppingCartService$ = this.shoppingCartService.findAll().subscribe((shoppingCart:CartItem[]) => {
      this.shoppingCart = shoppingCart;
    })
  }

  update(cartItem:CartItem, requiredQuantity:number) {
    cartItem.requiredQuantity = requiredQuantity;
    this.shoppingCartService.update(cartItem).subscribe((cartItem:CartItem) => {
      this.shoppingCartService.findAll().subscribe((cartItems:CartItem[]) => {
        this.shoppingCart = cartItems;
        this.message = "Required Quantity updated successfully"
      })
    })
  }

  delete(cartItem:CartItem) {
    this.shoppingCartService.delete(cartItem.id).subscribe((cartItem:CartItem) => {
      this.shoppingCartService.findAll().subscribe((cartItems:CartItem[]) => {
        this.shoppingCart = cartItems;
        this.message = "CartItem deleted successfully"
      })
    })
  }

}
