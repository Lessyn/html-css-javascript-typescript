import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PersonagemComponent } from './personagem.component';

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
    ]
})
export class PersonagemModule{}