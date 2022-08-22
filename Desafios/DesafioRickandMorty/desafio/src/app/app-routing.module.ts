import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonagemListaComponent } from './personagens/personagem-lista/personagem-lista.component';

const routes: Routes = [
  { path: 'character', component:PersonagemListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
