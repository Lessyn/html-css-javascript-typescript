import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    user$: Observable<User>;  
    
    constructor(private _userService:UserService, private _router:Router){
       this.user$ = _userService.getUser();
       
    }

    logout() {
        this._userService.logout();
        this._router.navigate(['']);
    }
 }