import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonagemComponent } from './personagem/personagem.component';
import { PersonagemListaComponent } from './personagem-lista/personagem-lista.component';

@NgModule({
    declarations: [PersonagemComponent, PersonagemListaComponent],    
    imports: [HttpClientModule, CommonModule],
})

export class PersonagensModule{}