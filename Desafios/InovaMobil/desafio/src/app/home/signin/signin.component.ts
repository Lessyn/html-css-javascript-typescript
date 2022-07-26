import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component ({
    templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit{
    
    loginForm!: FormGroup

    constructor(private formBuider: FormBuilder){}
    
    
    ngOnInit(): void {
        this.loginForm = this.formBuider.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const userName = this.loginForm.get('userName')?.value;
        const password = this.loginForm.get('password')?.value;
    }
}