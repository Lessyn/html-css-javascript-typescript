import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PersonagemModel } from './personagem.model';

const API = 'https://rickandmortyapi.com/api/';

@Injectable({
    providedIn: 'root'
})

export class PersonagemService{

    constructor(private _http: HttpClient){}

    getPersonagens(): Observable<any> {
       return this._http
        .get<any>(API + 'character/')
    }
}
