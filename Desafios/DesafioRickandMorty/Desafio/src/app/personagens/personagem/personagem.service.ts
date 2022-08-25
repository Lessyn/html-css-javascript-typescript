import { HttpClient, HttpParams } from '@angular/common/http';
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

    loadPersonagens(pagina: number): Observable<any> {
        const params = new HttpParams()
        .append("pagina", pagina)
        return this._http
         .get<any>(API + 'character/', {params})
    }
} 

 
   
