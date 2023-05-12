import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public product:Product;
  public productForm:FormGroup;
  private router:Router;

  constructor(router:Router) { 
    this.product = new Product(0, "", "", "", 0, 0, "");
    this.productForm = this.createForm();
    this.router = router;
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

  }

  public goBack() {
    this.router.navigate(['/admin/productmanager']);
  }

}
