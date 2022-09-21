import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

import { Personagem } from '../personagem/personagem.model';
import { PersonagemService } from '../personagem/personagem.service';

@Component({
  selector: 'rm-personagem-lista',
  templateUrl: './personagem-lista.component.html',
  styleUrls: ['./personagem-lista.component.css'],
})
export class PersonagemListaComponent implements OnInit {
  valorFiltro = '';

  filtroPorNome: string = '';
  personagens: Personagem[] = [];

  Status: string[] = [];
  Species: string[] = [
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ];

  Gender: string[] = ['Genderless'];

  StatusFiltrado = new Set();
  GenderFiltrado = new Set();
  SpeciesFiltrado = new Set();

  hasMore: boolean = true;
  paginaInicial: number = 1;

  querySpecies = '';
  queryStatus = '';
  queryGender = '';

  opcoesFiltroName = [];
  opcoesFiltroSpecies = [];
  opcoesFiltroGender = [];
  opcoesFiltroStatus = [];

  debounce: Subject<string> = new Subject<string>();

  constructor(private _personagemService: PersonagemService) {}

  ngOnInit(): void {
    this._personagemService.getPersonagens().subscribe((res) => {
      this.personagens = res.results;

      this.personagens.forEach((item) => {
        this.Status.push(item.status);
        this.Species.push(item.species);
        this.Gender.push(item.gender);
      });

      this.StatusFiltrado = new Set(this.Status);
      this.GenderFiltrado = new Set(this.Gender);
      this.SpeciesFiltrado = new Set(this.Species);
      
      this.debounce.pipe(debounceTime(300)).subscribe((filtro) => {
        this.filtroNome(filtro);
      });
    });
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe;
  }

  limparFiltroNome(): void {
    this._personagemService
      .getFiltro(
        '',
        this.opcoesFiltroSpecies,
        this.opcoesFiltroGender,
        this.opcoesFiltroStatus
      )
      .subscribe((res) => {
        this.personagens = res.results;
      });

    this.valorFiltro = '';
  }

  filtroNome(name: string) {
    this.opcoesFiltroName.push(name);
    if (this.opcoesFiltroName.length > 1) this.opcoesFiltroName.shift();
    this._personagemService
      .getFiltro(
        this.opcoesFiltroName,
        this.opcoesFiltroSpecies,
        this.opcoesFiltroGender,
        this.opcoesFiltroStatus
      )
      .subscribe(
        (res) => {
          this.personagens = res.results;
        },
        () => {
          alert('Personagem não encontrado'), this.limparFiltroNome();
        }
      );
  }

  //-- Inicio dos filtros individuais --
  clicouSpecie(tipo: any) {
    this.opcoesFiltroSpecies.push(tipo);
    console.log(tipo);
    if (this.opcoesFiltroSpecies.length > 1) this.opcoesFiltroSpecies.shift();
    this._personagemService
      .getFiltro(
        this.opcoesFiltroName,
        this.opcoesFiltroSpecies,
        this.opcoesFiltroGender,
        this.opcoesFiltroStatus
      )
      .subscribe((res) => {
        this.personagens = res.results;
        console.log(this.personagens);
      });
  }

  clicouGender(tipo: any) {
    this.opcoesFiltroGender.push(tipo);
    if (this.opcoesFiltroGender.length > 1) this.opcoesFiltroGender.shift();
    console.log(this.opcoesFiltroGender);
    this._personagemService
      .getFiltro(
        this.opcoesFiltroName,
        this.opcoesFiltroSpecies,
        this.opcoesFiltroGender,
        this.opcoesFiltroStatus
      )
      .subscribe((res) => {
        this.personagens = res.results;
        console.log(this.personagens);
      });
  }

  clicouStatus(tipo: any) {
    this.opcoesFiltroStatus.push(tipo);
    if (this.opcoesFiltroStatus.length > 1) this.opcoesFiltroStatus.shift();
    console.log(this.opcoesFiltroStatus);
    this._personagemService
      .getFiltro(
        this.opcoesFiltroName,
        this.opcoesFiltroSpecies,
        this.opcoesFiltroGender,
        this.opcoesFiltroStatus
      )
      .subscribe((res) => {
        this.personagens = res.results;
        console.log(this.personagens);
      });
  } //--Fim dos filtros individuais--

  load() {
    this._personagemService
      .paginacaoPersonagens(++this.paginaInicial)
      .subscribe((res: any) => {
        this.personagens = this.personagens.concat(res.results);
        console.log(this.personagens);
        if (!this.personagens.length) this.hasMore = false;
      });
  }
}