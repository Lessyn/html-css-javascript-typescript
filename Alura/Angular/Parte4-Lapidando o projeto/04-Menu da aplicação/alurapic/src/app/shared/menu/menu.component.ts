import { Component } from '@angular/core';

@Component({
    selector: 'ap-menu',
    templateUrl: "./menu.component.html"
})
export class MenuComponent{
    isShow = false;

    toogle() {
        this.isShow = !this.isShow;
    }
}