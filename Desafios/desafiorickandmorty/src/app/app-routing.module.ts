import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonagemDetalhesComponent } from './personagens/personagem-detalhes/personagem-detalhes.component';



import { PersonagemListaComponent } from './personagens/personagem-lista/personagem-lista.component';

const routes: Routes = [

  {
    path: 'character', component: PersonagemListaComponent
  },

  {
    path: 'character/:id', component: PersonagemDetalhesComponent
  },
  
  {
    path: 'character/?:name:opcoes', component: PersonagemListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
