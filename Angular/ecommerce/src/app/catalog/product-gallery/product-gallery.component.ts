import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {

  public minimumQuantity:number;

  @Input()
  public product?:Product;

  // property decorator (it inject getter and setter method for notify property)
  @Output() 
  public notify:EventEmitter<CartItem>;

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
