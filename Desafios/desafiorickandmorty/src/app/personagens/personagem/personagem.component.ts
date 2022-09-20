import { Component, Input, OnInit } from '@angular/core';
import { Personagem } from './personagem.model';

@Component({
  selector: 'rm-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css'],
})
export class PersonagemComponent {
  constructor() {}

  @Input() personagem: Personagem[] = [];

  @Input() image = '';
  @Input() name = '';
  @Input() species = '';
  @Input() gender = '';
  @Input() status = '';
  @Input() id = '';
  @Input() url = '';
}
