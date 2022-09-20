import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PersonagemModule } from '../personagem/personagem.module';
import { BotaoLoadComponent } from './botao-load/botao-load.component';
import { PersonagemListaComponent } from './personagem-lista.component';
import { PersonagensComponent } from './personagens/personagens.component';

@NgModule({
    declarations:[
        PersonagemListaComponent,
        PersonagensComponent,
        BotaoLoadComponent,        
    ],

    imports:[
        CommonModule,
        PersonagemModule,
        RouterModule
    ],
    exports:[
        PersonagensComponent
    ]
})

export class PersonagemListaModule{}