import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonagemModule } from '../personagem/personagem.module';
import { BotaoLoadComponent } from './botao-load/botao-load.component';
import { FiltroPorNome } from './filtro-por-nome.pipe';
import { PersonagemListaComponent } from './personagem-lista.component';
import { PersonagensComponent } from './personagens/personagens.component';

@NgModule({
    declarations:[
        PersonagemListaComponent,
        PersonagensComponent,
        BotaoLoadComponent,
        FiltroPorNome   
    ],

    imports:[
        CommonModule,
        PersonagemModule
    ]
})

export class PersonagemListaModule{}