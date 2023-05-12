import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const mycomponents = [
  ProductsComponent,
  ProductGalleryComponent,
  ProductListComponent,
  ShoppingCartComponent
]

@NgModule({
  declarations: mycomponents,
  imports: [
    CommonModule
  ],
  exports: mycomponents
})
export class CatalogModule { }
