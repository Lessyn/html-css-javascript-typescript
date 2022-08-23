import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonagemComponent } from './personagem/personagem.component';
import { PersonagemListaComponent } from './personagem-lista/personagem-lista.component';
import { PersonagemIndividualComponent } from './personagem-individual/personagem-individual.component';

@NgModule({
    declarations: [PersonagemComponent, PersonagemListaComponent, PersonagemIndividualComponent],    
    imports: [HttpClientModule, CommonModule]
})

export class PersonagensModule{}