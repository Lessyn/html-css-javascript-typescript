import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
    templateUrl:'./signup.component.html'
})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _userNotTakenValidatorService: UserNotTakenValidatorService,
        private _signUpService: SignUpService,
        private _router: Router){ }   

    ngOnInit(): void {
       
        this.signupForm = this._formBuilder.group({
            email:['',
                [            
                    Validators.required,
                    Validators.email
                ]
        ],
            fullName:['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
        ],
            userName:['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)                    
                ],
                [
                    this._userNotTakenValidatorService.checkUserNameTaken()
                ]
        ],
            password:['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
        ]

        });
    }
    signup(){
        const newUser = this.signupForm.getRawValue() as NewUser;
        this._signUpService
        .signup(newUser)
        .subscribe(
            () => this._router.navigate(['']),
            err => console.log(err)
        );
    }
 }