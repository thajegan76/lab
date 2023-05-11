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

  public shoppingCart:CartItem[];
  public shoppingCartService:ShoppingCartService;
  public shoppingCartService$?:Subscription;

  constructor(shoppingCartService:ShoppingCartService) { 
    this.shoppingCart = [];
    this.shoppingCartService = shoppingCartService;
  }

  ngOnInit(): void {
    this.shoppingCartService$ = this.shoppingCartService.findAll().subscribe((shoppingCart:CartItem[]) => {
      this.shoppingCart = shoppingCart;
    })
  }

}
