import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  
  public colspanValue:number;
  public isGallery:boolean;
  public products:Product[];
  public searchResults:Product[];
  public shoppingCart:CartItem[];

  public productService:ProductService;
  public productService$?:Subscription;

  constructor(productService:ProductService) {
    this.colspanValue = 2;
    this.isGallery = true;
    this.products = [];
    this.searchResults = [];
    this.shoppingCart = [];
    this.productService = productService;
  }

  ngOnInit(): void {
    this.productService$ = this.productService.findAll().subscribe((products:Product[]) => {
      this.products = products;
    })
  }

  ngOnDestroy(): void {
    this.productService$?.unsubscribe();
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
