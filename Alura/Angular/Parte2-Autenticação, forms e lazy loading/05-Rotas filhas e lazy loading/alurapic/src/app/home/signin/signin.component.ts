import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})

export class SignInComponent implements OnInit{

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(private _formBuilder: FormBuilder,
                private _authService: AuthService,
                private _router: Router,
                private _platformDetectorService: PlatformDetectorService) { }

    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        this._platformDetectorService.isPlatformBrowser() && //detecta em qual plataforma a aplicação está sendo executada que nesse caso aqui, é um browser. E quando é um browser, ele aplica um focus no login.
                this.userNameInput.nativeElement.focus();
        
    }

    login() {
        const userName = this.loginForm.get('userName')?.value;
        const password = this.loginForm.get('password')?.value;

        this._authService
        .authenticate(userName, password)
        .subscribe(
             () => this._router.navigate(['user', userName]),
            err => {
                console.log(err);
                this.loginForm.reset();
                this._platformDetectorService.isPlatformBrowser() && //detecta em qual plataforma a aplicação está sendo executada que nesse caso aqui, é um browser. E quando é um browser, ele aplica um focus no login.
                this.userNameInput.nativeElement.focus();
                alert('Invalid user name or password!');
            }
        );
    }
}