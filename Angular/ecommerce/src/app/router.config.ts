import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './shared/registration/registration.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const approutes:Routes = [
    { path:'home', component:ProductsComponent, pathMatch:'full' },
    { path:'shoppingcart', component: ShoppingCartComponent, pathMatch:'full' },
    { path:'registration', component:RegistrationComponent, pathMatch:'full' },
    { path:'login', component:LoginComponent, pathMatch:'full' },
    { path:'', redirectTo:'home', pathMatch:'full' }
]