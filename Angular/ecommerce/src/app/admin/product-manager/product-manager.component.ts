import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  public products:Product[];
  public productService:ProductService;
  public productService$?:Subscription;
  public message:string;

  constructor(productService:ProductService) { 
    this.products = [];
    this.productService = productService;
    this.message = "";    
  }

  ngOnInit(): void {
    this.productService$ = this.productService.findAll().subscribe((products:Product[]) => {
      this.products = products;
      localStorage.setItem("products", JSON.stringify(this.products));
    })
  }

  ngOnDestroy(): void {
    this.productService$?.unsubscribe();
  }

  doDelete(product:Product) {
    this.productService.delete(product.id).subscribe(() => {
      this.productService.findAll().subscribe((products:Product[]) => {
        this.products = products;
        this.message = "Product successfully deleted";
      })      
    })
  }

}