import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Personagem } from '../personagem/personagem.model';
import { PersonagemService } from '../personagem/personagem.service';
import { Episode } from '../personagem/personagem-episode.model';

@Component({
  selector: 'rm-personagem-detalhes',
  templateUrl: './personagem-detalhes.component.html',
  styleUrls: ['./personagem-detalhes.component.css'],
})
export class PersonagemDetalhesComponent implements OnInit {
  //array = '';

  // Propriedades = [
  //   'gender',
  //   'status',
  //   'species',
  //   'origin',
  //   'type',
  //   'location',
  // ];

  episodes: Episode[] = [];
  personagem$: Observable<Personagem>;
  episode$: Observable<Episode>;

  constructor(
    private _route: ActivatedRoute,
    private _personagemService: PersonagemService
  ) {}

  ngOnInit(): void {
    this.personagem$ = this._personagemService.getPersonagemDetalhes(
      this._route.snapshot.params['id']
    );

    this._personagemService.getEpisodes().subscribe((res) => {
      this.episodes = res.results;      
    });
  }
}
// this.personagem$.forEach((objeto: any) => {
//   console.log(objeto);
//   for (var chave in objeto) {
//     if (this.arrayPropriedades.includes(chave)) {
//       (chave === 'origin' || chave === 'location') ?
//         this.array += ` <div class="container-info">
//                               <strong> ${transformarPrimeiraLetraMaiuscula(chave)}: </strong>
//                                <span>${objeto[chave].name}</span>
//                         </div>
//                         -----------------------------
//                         <br>`
//       :
//         this.array += `<div class="container-info">
//                           <strong>${transformarPrimeiraLetraMaiuscula(chave)} :</strong>
//                           <span>${objeto[chave]}</span>
//                         </div>
//                         -----------------------------
//                         <br>`;
//     }
//   }
// });

// function transformarPrimeiraLetraMaiuscula(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }