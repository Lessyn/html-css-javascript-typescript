import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

const API_URL = 'https://rodrigo.reader.homologacao.inovamobil.com.br';

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(public http: HttpClient){}

    authenticate(iD: string, chaveAcesso: string){
        /*return this.http.get(API_URL + `/api/produtos/${chaveAcesso}`,)*/
        return this.http
        .post(API_URL + '/api/login',
         {iD, chaveAcesso},
         {observe: 'response'}
         )
        .pipe(tap(res => {
            const authToken = res.headers.get('x-access-Token');
            console.log(`User ${iD} authenticated with token ${authToken}`)
        }))
    }
}