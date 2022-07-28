import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app.routing.module";
import { ProductComponent } from "./product/product.component";

@NgModule({
    declarations:[ProductComponent],

    imports:[
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        CommonModule,
        FormsModule, ReactiveFormsModule        
    ]
   
})
export class ProductModule{}