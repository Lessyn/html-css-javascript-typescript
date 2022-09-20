import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Personagem } from './personagem.model';

const API = `https://rickandmortyapi.com/api/`;

@Injectable({
  providedIn: 'root',
})
export class PersonagemService { 

  constructor(private _http: HttpClient) {}

  getPersonagens(): Observable<any> {
    return this._http.get<any>(API + 'character/');
  }

  getFiltro(name, species, gender, status): Observable<any> {
    return this._http.get<any>(API + `character/?name=${name}&status=${status}&species=${species}&gender=${gender}`);
  }

  getName(name: string): Observable<any> {
    return this._http.get<any>(API + `character/?name=${name}`);
  }
  // // -- Inicio dos filtros individuais --
  // getSpecies(species: string): Observable<any> {
  //   return this._http.get<any>(API + `character/?species=${species}`);
  // }

  // getGenders(gender: string): Observable<any> {
  //   return this._http.get<any>(API + `character/?gender=${gender}`);
  // }

  // getStatus(status: string): Observable<any> {
  //   return this._http.get<any>(API + `character/?status=${status}`);
  // } //-- Fim dos filtros individuais.

  getPersonagemDetalhes(id: string) {
    return this._http.get<any>(API + `character/${id}`);
  }

  getEpisodes() {
    return this._http.get<any>(API + 'episode');
  }

  paginacaoPersonagens(page: number) {
    return this._http.get<Personagem[]>(API + `character/?page=${page}`);
  }
}