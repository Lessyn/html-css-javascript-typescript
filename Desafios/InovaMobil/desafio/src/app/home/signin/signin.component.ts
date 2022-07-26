import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/auth.service';



@Component ({
    styleUrls:  ['./signin.component.css'],
    templateUrl: './signin.component.html'
})



export class SigninComponent implements OnInit{
    
    loginForm: FormGroup;

    constructor(private _formBuilder: FormBuilder,
                private _authService: AuthService){}  
              
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
        },
        (()  => {
            
            this.loginForm.reset();
            alert('Invalid user name or password!');
        })
        )
        
    }
}