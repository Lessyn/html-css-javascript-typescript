import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/platform-detector.service';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
    templateUrl:'./signup.component.html'
})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>

    constructor(
        private _formBuilder: FormBuilder,
        private _userNotTakenValidatorService: UserNotTakenValidatorService,
        private _signUpService: SignUpService,
        private _router: Router,
        private _platformDetectorService: PlatformDetectorService,
        private _changeDetectorRef: ChangeDetectorRef){ }   

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

    ngAfterViewInit(): void {    
        this._platformDetectorService.isPlatformBrowser() && //detecta em qual plataforma a aplicação está sendo executada que nesse caso aqui, é um browser. E quando é um browser, ele aplica um focus no login.
        this.emailInput.nativeElement.focus()
        this._changeDetectorRef.detectChanges()

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