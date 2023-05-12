import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { Product } from '../../models/product';

@Component({
  // html tag component
  // selector: 'app-product-list',
  // html attribute component
  // selector: '[app-product-list]',
  // html class component
  selector: '.app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  public product?:Product;

  @Input()
  public index?:number;

  @Output() 
  public notify:EventEmitter<CartItem>;

  public minimumQuantity:number;

  constructor() { 
    this.minimumQuantity = 20;
    this.notify = new EventEmitter<CartItem>();
  }

  ngOnInit(): void {
  }

  public getDescriptionColor(source:string):string {
    switch(source) {
      case 'USA':
        return 'blue';
      case 'CHINA':
        return 'red';
      case 'MALAYSIA':
        return 'green';
      default:
        return 'black';
    }
  }

  public checkQuantity(product:Product, requiredQuantity:HTMLInputElement, 
    addButton:HTMLButtonElement, message:HTMLSpanElement) {
      if (product.quantity < +requiredQuantity.value) {
        addButton.disabled = true;
        message.innerHTML = "Less Quantity";
      } else {
        addButton.disabled = false;
        message.innerHTML = "";
      }
  }

  public addToCart(product:Product, requiredQuantity:HTMLInputElement, message:HTMLSpanElement) {
    let cartItem:CartItem = new CartItem(0, product, +requiredQuantity.value);
    this.notify.emit(cartItem);
    requiredQuantity.value = "";
    message.innerHTML = "Product added";
  }

}
