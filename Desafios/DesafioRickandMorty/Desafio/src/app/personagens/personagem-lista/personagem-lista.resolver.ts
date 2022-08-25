import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonagemModel } from '../personagem/personagem.model';
import { PersonagemService } from '../personagem/personagem.service';

@Injectable({providedIn:'root'})

export class PersonagemListaResolver implements Resolve<Observable<PersonagemModel[]>>{

    constructor(private _service: PersonagemService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PersonagemModel[]> | Observable<Observable<PersonagemModel[]>> | Promise<Observable<PersonagemModel[]>> { 
        
        return this._service.loadPersonagens(1);
    }
}