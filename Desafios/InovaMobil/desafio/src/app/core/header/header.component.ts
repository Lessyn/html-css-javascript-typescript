import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';

import { UserService } from '../user/user.service';

@Component({
    selector: 'IM-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    user$: Observable<User>;   
    
    constructor(private _userService: UserService){
       this.user$ = _userService.getUser();
    }
 }