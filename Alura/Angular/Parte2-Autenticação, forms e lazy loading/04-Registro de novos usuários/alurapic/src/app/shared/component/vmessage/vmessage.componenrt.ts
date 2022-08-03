import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-vmessage',
    templateUrl: './vmessage.Component.html'
})
export class VMessageComponent {
    @Input() text = '';
 }