import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PersonagemComponent } from './personagem.component';
import { PersonagemService } from './personagem.service';

@NgModule({
    declarations:[
        PersonagemComponent
    ],

    imports:[
        CommonModule,
        HttpClientModule
    ],
    exports:[
        PersonagemComponent
    ],
    providers:[PersonagemService]
})
export class PersonagemModule{}