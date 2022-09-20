import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PersonagemModule } from '../personagem/personagem.module';
import { BotaoLoadComponent } from './botao-load/botao-load.component';
import { PersonagemListaComponent } from './personagem-lista.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations:[
        PersonagemListaComponent,
        PersonagensComponent,
        BotaoLoadComponent,
                
    ],

    imports:[
        CommonModule,
        PersonagemModule,
        RouterModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatSelectModule,
        FlexLayoutModule        
    ],
    exports:[
        PersonagensComponent
    ]
})

export class PersonagemListaModule{}