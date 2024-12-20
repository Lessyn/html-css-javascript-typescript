import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SignUpService } from './signup.service';

import { debounceTime, first, map, switchMap } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class UserNotTakenValidatorService{

    constructor(private _signUpService: SignUpService){}

    checkUserNameTaken(){
        return (control: AbstractControl) => {
            return control.valueChanges
            .pipe(debounceTime(300))
            .pipe(switchMap(userName => this._signUpService.checkUserNameTaken(userName)
            ))
            .pipe(map(isTaken => isTaken ?{ userNameTaken: true}: null))
            .pipe(first());
        }
    }

}