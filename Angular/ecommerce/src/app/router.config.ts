import { Routes } from '@angular/router';
import { ProductsComponent } from './catalog/products/products.component';
import { ShoppingCartComponent } from './catalog/shopping-cart/shopping-cart.component';
import { RegistrationComponent } from './shared/registration/registration.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

export const approutes:Routes = [
    { path:'home', component: ProductsComponent, pathMatch:'full' },
    { path:'shoppingcart', component: ShoppingCartComponent, pathMatch:'full' },
    { path:'registration', component: RegistrationComponent, pathMatch:'full' },
    { path:'login', component: LoginComponent, pathMatch:'full' },
    { path:'admin', loadChildren: () => import('./admin/admin.module').then((module) => module.AdminModule), canActivate:[ AuthGuardService ] },
    { path:'', redirectTo: 'home', pathMatch:'full' }
]

/*
let loadChildren = () => {
    return import('./admin/admin.module').then((module) => {
        return module.AdminModule;
    })
}

let loadChildren = () => {
    return import('./admin/admin.module').then((module) => module.AdminModule)
}

let loadChildren = () => import('./admin/admin.module').then((module) => module.AdminModule)
*/