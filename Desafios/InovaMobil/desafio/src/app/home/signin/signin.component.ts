import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthService } from 'src/app/core/auth.service';
import { SignInModel } from './model/signin.model';



@Component ({
    styleUrls:  ['./signin.component.css'],
    templateUrl: './signin.component.html'
})

export class SignInComponent implements OnInit{
    storage = window.localStorage
    loginForm: FormGroup;

    constructor(private _formBuilder: FormBuilder,
                private _authService: AuthService,
                private _router: Router){}  
              
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            ID: ['', Validators.required],
            chaveAcesso: ['', Validators.required]
        });
    }

    login() {
        const iD = this.loginForm.get('ID')?.value;
        const chaveAcesso = this.loginForm.get('chaveAcesso')?.value;

       this._authService.authenticate(iD,chaveAcesso)
       .subscribe((res: SignInModel) => {
        const token = res.accessToken;
        this.storage.setItem('token', token)
        this._router.navigate(['api/produtos']);
        
        console.log(`User ${iD} authenticated with token ${token}`)
       })  
    }
}