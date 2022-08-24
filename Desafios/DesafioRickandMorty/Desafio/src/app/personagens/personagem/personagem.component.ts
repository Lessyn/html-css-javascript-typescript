import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rm-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  constructor() { }

  @Input() image = ''; 
  @Input() name = '' ;
  @Input() species = ''; 

  ngOnInit(): void {
  }

}
