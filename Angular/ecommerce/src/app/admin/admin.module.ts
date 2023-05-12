import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { approutes } from './router.config';

import { ProductManagerComponent } from './product-manager/product-manager.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    ProductManagerComponent,
    UserManagerComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(approutes)
  ]
})
export class AdminModule { }
