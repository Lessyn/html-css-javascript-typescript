import { Component, OnInit } from '@angular/core';
import { PersonagemModel } from '../personagem/personagem.model';
import { PersonagemService } from '../personagem/personagem.service';

@Component({
  selector: 'rm-personagem-lista',
  templateUrl: './personagem-lista.component.html',
  styleUrls: ['./personagem-lista.component.css']
})
export class PersonagemListaComponent implements OnInit {

  personagens: PersonagemModel[] = [];

  constructor(private _personagemService: PersonagemService){ }

  ngOnInit(): void {
    this
      ._personagemService 
      .getPersonagens()    
      .subscribe(res => {
      this.personagens = res.results;    
  });
}
}
