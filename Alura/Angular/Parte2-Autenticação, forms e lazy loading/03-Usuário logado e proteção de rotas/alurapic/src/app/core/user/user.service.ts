import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import jtw_decode from 'jwt-decode';

@Injectable({providedIn: 'root'})

export class UserService{ 

    private userSubject = new BehaviorSubject<User>(null);

    constructor (private _tokenService: TokenService){
        this._tokenService.hasToken() && this.decodeAndNotify();
     }

setToken(token: string){
    this._tokenService.setToken(token);
    this.decodeAndNotify();
}

getUser(){
    return this.userSubject.asObservable();
 }

private decodeAndNotify() {
    const token = this._tokenService.getToken()
    const user = jtw_decode(token) as User;
    this.userSubject.next(user);
}

logout() {
    this._tokenService.removeToken();
    this.userSubject.next(null);
}
    
}