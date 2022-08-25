import { NgModule } from '@angular/core';

import { PersonagemModule } from './personagem/personagem.module';
import { PersonagemIndividualModule } from './personagem-individual/personagem-individual.module';
import { PersonagemListaModule } from './personagem-lista/personagem-lista.module';

@NgModule({     
     
    imports: [
        PersonagemModule,
        PersonagemIndividualModule,
        PersonagemListaModule,
    ]
})

export class PersonagensModule{}