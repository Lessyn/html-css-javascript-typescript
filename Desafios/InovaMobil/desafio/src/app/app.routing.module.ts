import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./home/signin/signin.component";
import { ProductInsertComponent } from "./products/productInsert/productInsert.component";

const routes: Routes = [

    {
        path:'', component: SignInComponent
    }
    ,
    {
        path:'api/produtos', component: ProductInsertComponent
    }   

];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}