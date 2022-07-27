import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInModel } from '../home/signin/model/signin.model';

const API_URL = 'https://rodrigo.reader.homologacao.inovamobil.com.br';

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(public http: HttpClient){}

    

    authenticate(iD: string, chaveAcesso: string): Observable<SignInModel>{       
        return this.http
        .post<SignInModel>(API_URL + '/api/login',
         {iD, chaveAcesso})
         
    }
}

