import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'ap-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent implements OnInit{

    user$: Observable<User>;

    constructor(private _userService: UserService){}
    ngOnInit(): void {
       this.user$ = this._userService.getUser();
    }
}