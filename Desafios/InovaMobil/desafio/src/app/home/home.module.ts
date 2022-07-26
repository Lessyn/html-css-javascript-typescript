import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from '../core/auth.service';
import { SigninComponent } from "./signin/signin.component";
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'

@NgModule({
    declarations:
        [SigninComponent],
    imports:
        [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        MatCardModule
    ],
    exports:[MatInputModule, MatCardModule],

    providers: 
    [AuthService]

})

export class HomeModule { }