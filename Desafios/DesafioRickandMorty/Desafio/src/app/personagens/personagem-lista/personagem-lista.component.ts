import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs';

import { PersonagemModel } from '../personagem/personagem.model';
import { PersonagemService } from '../personagem/personagem.service';

@Component({
  selector: 'rm-personagem-lista',
  templateUrl: './personagem-lista.component.html',
  styleUrls: ['./personagem-lista.component.css']
})
export class PersonagemListaComponent implements OnInit, OnDestroy {

  personagens: PersonagemModel[] = [];

  filtro: string = '';

  debounce: Subject<string> = new Subject<string>()

  exibirMais: boolean = true;

  paginaAtual: number = 1;

  constructor(private _personagemService: PersonagemService){ }
  
  ngOnInit(): void {
    this
    ._personagemService 
    .getPersonagens()    
    .subscribe(res => {
      this.personagens = res.results;
      this.debounce
      .pipe(debounceTime(300))
      .subscribe(filtro => this.filtro = filtro);    
    });
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe;
  }

  load(){
    this._personagemService.loadPersonagens(++this.paginaAtual)
    .subscribe(personagens => {
      this.personagens = this.personagens.concat(personagens);
      if (!personagens.length){
        this.exibirMais = false;
      }
    })
  }
}
