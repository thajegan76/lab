import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {

  public product?:Product;
  public productForm?:FormGroup;
  private productService:ProductService;
  private productService$?:Subscription;

  private router:Router;
  private activatedRoute:ActivatedRoute;

  constructor(productService:ProductService, router:Router, activatedRoute:ActivatedRoute) { 
    this.productService = productService;
    this.router = router;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) => {
      let id:number = params["id"];
      let productService$ = this.productService.findById(id).subscribe((product:Product) => {
        this.product = product;
        this.productForm = this.createForm();
      })
    })
  }

  ngOnDestroy(): void {
    if (this.productService$) this.productService$.unsubscribe();
  }

  createForm():FormGroup {
    let productForm:FormGroup = new FormGroup({
      name: new FormControl(this.product?.name),
      description: new FormControl(this.product?.description),
      source: new FormControl(this.product?.source),
      quantity: new FormControl(this.product?.quantity),
      price: new FormControl(this.product?.price),
      photo: new FormControl(this.product?.photo)
    })
    return productForm
  }

  public save() {
    if (this.product && this.productForm) {
      let product:Product = this.productForm.value;
      product.id = this.product.id;
      this.productService.update(product).subscribe(() => {
        this.router.navigate(['/admin/productmanager']);
      })
    }
  }

  public goBack() {
    this.router.navigate(['/admin/productmanager']);
  }

}
