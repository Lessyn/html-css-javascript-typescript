import { Pipe, PipeTransform } from '@angular/core';

import { PersonagemModel } from '../personagem/personagem.model';

@Pipe({ name: 'filtroPorNome' })
export class FiltroPorNome implements PipeTransform {
  transform(personagens: PersonagemModel[], nomeQuery: string) {
    nomeQuery = nomeQuery.trim().toLowerCase();

    return nomeQuery
      ? personagens.filter(personagem=>
          personagem.name.toLowerCase().match(nomeQuery)
        )
      : personagens;
  }
}
