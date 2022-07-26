import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'https://rodrigo.reader.homologacao.inovamobil.com.br';

@Injectable()
export class AuthService{

    constructor(public http: HttpClient){}

    authenticate(iD: string, chaveAcesso: string){
        /*return this.http.get(API_URL + `/api/produtos/${chaveAcesso}`,)*/
        return this.http.post(API_URL + '/api/login', {iD, chaveAcesso});
    }
}