import { Routes } from "@angular/router";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { MenuComponent } from "./menu/menu.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { UserManagerComponent } from "./user-manager/user-manager.component";

export const approutes:Routes = [
    { path:"productmanager", component:ProductManagerComponent, pathMatch:'full' },
    { path:"usermanager", component:UserManagerComponent, pathMatch:'full' },
    { path:"newproduct", component:NewProductComponent, pathMatch:'full' },
    { path:"editproduct/:id", component:EditProductComponent, pathMatch:'full' },
    { path:"menu", component:MenuComponent, children:[
        { path:"productmanager", component:ProductManagerComponent, pathMatch:'full' },
        { path:"usermanager", component:UserManagerComponent, pathMatch:'full' },
        { path:'', redirectTo:'productmanager', pathMatch:'full'}
    ]},
    { path:'', redirectTo:'productmanager', pathMatch:'full' }
]