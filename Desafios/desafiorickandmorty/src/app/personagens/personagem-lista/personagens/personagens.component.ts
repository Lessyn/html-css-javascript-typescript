import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Personagem } from '../../personagem/personagem.model';
import { PersonagemService } from '../../personagem/personagem.service';

@Component({
  selector: 'rm-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
export class PersonagensComponent implements OnChanges {
  @Input() image = '';
  @Input() name = '';
  @Input() species = '';
  @Input() gender = '';
  @Input() status = '';

  @Input() personagens: Personagem[] = [];

  linhas: any[] = [];

  constructor(private _personagemService: PersonagemService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['personagens']) {
      this.linhas = this.colunas(this.personagens);
    }
  }

  colunas(personagens: Personagem[]) {
    const novasLinhas = [];

    for (let index = 0; index < personagens.length; index += 4) {
      novasLinhas.push(personagens.slice(index, index + 4));
    }
    return novasLinhas;
  }
  clicouIndividual(id: any) {
    this._personagemService.getPersonagemDetalhes(id).subscribe((res) => {
      this.personagens = res.results;
    });
  }
}
