import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  public colspanValue:number;
  public isGallery:boolean;
  public searchResults:Product[];
  public shoppingCart:CartItem[];

  public products:Product[] = []

  constructor() {
    this.colspanValue = 2;
    this.isGallery = true;
    this.searchResults = [];
    this.shoppingCart = [];
  }

  public doChangeView() {
    // Angular has this feature called change management
    // What is does is it monitors all the properites inside the class
    // Whenever the value of any property gets modified this will 
    // trigger the re-rendering process.
    // The re-rendering process does not re-render the entire DOM
    // It re-renders only the place where this particular variable is referred
    this.isGallery = !this.isGallery;
  }

  public doSearch(event:any) {
    let keyword = event.target.value;
    if (keyword !== '') {
      let regExpression:RegExp = new RegExp('^' + keyword, 'i');
      this.searchResults = this.products.filter((product:Product) => {
        return regExpression.test(product.name);
      })
    } else {
      this.searchResults = [];
    }
  }

  public addToCart(cartItem:CartItem) {
    this.shoppingCart.push(cartItem);
  }

}
