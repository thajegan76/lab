import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(productService:ProductService, router:Router) { 
    this.productService = productService;
    this.router = router;
    this.product = new Product(0, "", "", "", 0, 0, "");
    this.productForm = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm():FormGroup {
    let productForm:FormGroup = new FormGroup({
      name: new FormControl(this.product.name),
      description: new FormControl(this.product.description),
      source: new FormControl(this.product.source),
      quantity: new FormControl(this.product.quantity),
      price: new FormControl(this.product.price),
      photo: new FormControl(this.product.photo)
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
