import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PersonagemModule } from "../personagem/personagem.module";
import { PersonagemDetalhesComponent } from "./personagem-detalhes.component";

@NgModule({
    declarations:[PersonagemDetalhesComponent],
    exports:[PersonagemDetalhesComponent],
    imports:[
        CommonModule,
        PersonagemModule
    ]
})

export class PersonagemDetalhesModule{}