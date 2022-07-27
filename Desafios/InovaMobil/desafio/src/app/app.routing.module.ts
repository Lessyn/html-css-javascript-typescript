import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from "./home/signin/signin.component";
import { ProductComponent } from "./products/product/product/product.component";

const routes: Routes = [

    {
        path:'', component: SigninComponent
    }
    ,
    {
        path:'api/produtos', component: ProductComponent
    }   

];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}