import { NgModule } from '@angular/core';

import { PersonagemModule } from './personagem/personagem.module';

import { PersonagemListaModule } from './personagem-lista/personagem-lista.module';
import { PersonagemDetalhesModule } from './personagem-detalhes/personagem-detalhes.module';


@NgModule({     
     
    imports: [
        PersonagemModule,
        PersonagemDetalhesModule,        
        PersonagemListaModule,
    ]
})

export class PersonagensModule{}