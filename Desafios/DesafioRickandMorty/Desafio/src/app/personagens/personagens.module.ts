import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonagemComponent } from './personagem/personagem.component';
import { PersonagemListaComponent } from './personagem-lista/personagem-lista.component';
import { PersonagemIndividualComponent } from './personagem-individual/personagem-individual.component';
import { PersonagensComponent } from './personagem-lista/personagens/personagens.component';
import { FiltroPorNome } from './personagem-lista/Filtro-por-nome.pipe';

@NgModule({
    declarations: [
        PersonagemComponent,
        PersonagemListaComponent,
        PersonagemIndividualComponent,
        PersonagensComponent,
        FiltroPorNome
    ],    
    imports: [
        HttpClientModule,
        CommonModule]
})

export class PersonagensModule{}