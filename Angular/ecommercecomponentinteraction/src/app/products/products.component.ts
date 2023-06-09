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

  public products:Product[] = [
    { 
      "id": 1,
      "name": "Television",
      "description": "To watch movies",
      "source": "USA",
      "quantity": 15,
      "price": 1825.35,
      "photo": "https://static.toiimg.com/thumb/msid-81429075,width-400,resizemode-4/81429075.jpg"
    }, {
      "id": 2,
      "name": "Handphone",
      "description": "To communicate",
      "source": "CHINA",
      "quantity": 40,
      "price": 925.75,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-l_opo8bUdFghLttcXnKFhMuB7ippPSkJi0OTZa0h8RBEgjnYue29TaGh9xsCE9E6DE&usqp=CAU"
    }, {
      "id": 3,
      "name": "Computer",
      "description": "To play games",
      "source": "MALAYSIA",
      "quantity": 32,
      "price": 3578.65,
      "photo": "https://qph.cf2.quoracdn.net/main-qimg-022f1381262571d075a017094d5ccb52-lq"
    }, {
      "id": 4,
      "name": "Laptop",
      "description": "To do work",
      "source": "MALAYSIA",
      "quantity": 48,
      "price": 4285.25,
      "photo": "https://cdn.britannica.com/37/100537-050-910FC8A3/computer.jpg?w=400&h=300&c=crop"
    }, {
      "id": 5,
      "name": "Tablet",
      "description": "To do presentation",
      "source": "USA",
      "quantity": 74,
      "price": 1148.35,
      "photo": "https://static.toiimg.com/thumb/msid-81306847,width-400,resizemode-4/81306847.jpg"
    }, {
      "id": 6,
      "name": "Bicycle",
      "description": "To travel",
      "source": "CHINA",
      "quantity": 48,
      "price": 472.65,
      "photo": "https://cdn.britannica.com/63/82563-050-3FCFC72A/Family-country-road.jpg?w=400&h=300&c=crop"
    }
  ]

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
