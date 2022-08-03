import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModule } from './products/products.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductModule,
    CoreModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }