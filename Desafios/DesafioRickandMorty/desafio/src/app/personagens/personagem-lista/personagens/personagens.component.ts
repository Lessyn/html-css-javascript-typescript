import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PersonagemModel } from '../../personagem/personagem.model';

@Component({
  selector: 'rm-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnChanges {

 @Input() personagens: PersonagemModel[] = [];
 linhas: any[] = [];

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['personagens']){
      this.linhas = this.colunas(this.personagens);
    }
  }

 

  colunas(personagens: PersonagemModel[]){
    const novasLinhas = [];

    for( let index = 0; index < personagens.length; index+=4){
      novasLinhas.push(personagens.slice(index, index+4));
    }
    return novasLinhas;

  }

}
