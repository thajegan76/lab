import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public product:Product;
  public productForm:FormGroup;
  private router:Router;
  private productService:ProductService;
  public sources:string[];

  constructor(productService:ProductService, router:Router) { 
    this.productService = productService;
    this.router = router;
    this.product = new Product(0, "", "", "", 0, 0, "");
    this.productForm = this.createForm();
    this.sources = ["MALAYSIA", "USA", "CHINA"];
  }

  ngOnInit(): void {
  }

  createForm():FormGroup {
    let productForm:FormGroup = new FormGroup({
      name: new FormControl(this.product.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
      ]),
      description: new FormControl(this.product.description, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250)
      ]),
      source: new FormControl(this.product.source),
      quantity: new FormControl(this.product.quantity, [
        Validators.required,
        Validators.min(3),
        Validators.max(1000)
      ]),
      price: new FormControl(this.product.price, [
        Validators.required,
        Validators.min(3),
        Validators.max(10000)
      ]),
      photo: new FormControl(this.product.photo, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250)
      ])
    })
    return productForm
  }

  public save() {
    let product:Product = this.productForm.value;
    this.productService.save(product).subscribe(() => {
      this.router.navigate(['/admin/productmanager']);
    })
  }

  public goBack() {
    this.router.navigate(['/admin/productmanager']);
  }

}
