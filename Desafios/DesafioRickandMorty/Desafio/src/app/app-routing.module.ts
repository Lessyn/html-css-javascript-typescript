import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonagemIndividualComponent } from './personagens/personagem-individual/personagem-individual.component';
import { PersonagemListaComponent } from './personagens/personagem-lista/personagem-lista.component';

const routes: Routes = [

  {
    path: 'character', component: PersonagemListaComponent
  },

  {
    path: 'character/id', component: PersonagemIndividualComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
