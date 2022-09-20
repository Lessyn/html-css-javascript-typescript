import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonagensModule } from './personagens/personagens.module';



@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonagensModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
