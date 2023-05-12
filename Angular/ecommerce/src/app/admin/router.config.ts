import { Routes } from "@angular/router";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { UserManagerComponent } from "./user-manager/user-manager.component";

export const approutes:Routes = [
    { path:"productmanager", component:ProductManagerComponent, pathMatch:'full' },
    { path:"usermanager", component:UserManagerComponent, pathMatch:'full' },
    { path:'', redirectTo:'productmanager', pathMatch:'full' }
]