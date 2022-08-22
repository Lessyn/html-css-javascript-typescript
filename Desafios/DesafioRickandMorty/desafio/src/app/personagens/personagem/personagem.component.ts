import { Component, Input } from '@angular/core';

@Component({
    selector: 'rm-personagens',
    templateUrl: './personagem.component.html',
    styleUrls:['./personagem.component.css']
})
export class PersonagemComponent{

    @Input() description ='';

    @Input() url = '';
    
    @Input() personagem= '';
        
}