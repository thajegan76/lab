import { Routes } from '@angular/router';
import { ProductsComponent } from './catalog/products/products.component';
import { ShoppingCartComponent } from './catalog/shopping-cart/shopping-cart.component';
import { RegistrationComponent } from './shared/registration/registration.component';
import { LoginComponent } from './shared/login/login.component';

export const approutes:Routes = [
    { path:'home', component:ProductsComponent, pathMatch:'full' },
    { path:'shoppingcart', component: ShoppingCartComponent, pathMatch:'full' },
    { path:'registration', component:RegistrationComponent, pathMatch:'full' },
    { path:'login', component:LoginComponent, pathMatch:'full' },
    { path:'', redirectTo:'home', pathMatch:'full' }
]