import { Component, OnInit } from '@angular/core';

import { Personagem } from '../personagem/personagem.model';
import { PersonagemService } from '../personagem/personagem.service';

@Component({
  selector: 'rm-personagem-lista',
  templateUrl: './personagem-lista.component.html',
  styleUrls: ['./personagem-lista.component.css']
})
export class PersonagemListaComponent implements OnInit {

  personagem : Personagem[] = [];

  constructor(private _personagemService: PersonagemService){}  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
 

}

