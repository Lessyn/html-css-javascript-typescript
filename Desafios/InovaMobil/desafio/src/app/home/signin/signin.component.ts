import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthService } from 'src/app/core/auth.service';



@Component ({
    styleUrls:  ['./signin.component.css'],
    templateUrl: './signin.component.html'
})



export class SigninComponent implements OnInit{
    
    loginForm: FormGroup;

    constructor(private _formBuilder: FormBuilder,
                private _authService: AuthService,
                private _router: Router){}  
              
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const iD = this.loginForm.get('userName')?.value;
        const chaveAcesso = this.loginForm.get('password')?.value;

        this._authService

        .authenticate(iD, chaveAcesso)
        .subscribe((res) =>
        {
            console.log(res)
        }
            /*.authenticate(iD, chaveAcesso)
            .subscribe(
                () => this._router.navigate(['api/produtos']),
                err => {        
                console.log(err);
                this.loginForm.reset();*/
            
        );        
    }
}