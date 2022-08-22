import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Personagem } from './personagem.model';

const API = 'https://rickandmortyapi.com/api/'

@Injectable({providedIn: 'root'})

export class PersonagemService implements OnInit{

    personagem: Personagem[] = [];

    constructor(private _http: HttpClient){}

    ngOnInit(): void {
        this
        .getPersonagens()
        .subscribe((res: any) => {
          this.personagem = res.results
          console.log(res.results);         
        });
      }
    
      getPersonagens() {
        return this._http
        .get<Personagem[]>(API +'character/');
      }
}