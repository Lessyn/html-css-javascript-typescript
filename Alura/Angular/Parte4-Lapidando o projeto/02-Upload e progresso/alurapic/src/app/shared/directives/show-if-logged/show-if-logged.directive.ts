import { Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
    selector: '[showIfLogged]'
})

export class ShowIfLoggedDirective implements OnInit{

    constructor(
        private _element: ElementRef<any>,
        private _renderer: Renderer2,
        private _userService: UserService        
    ){}

    ngOnInit(): void {
       !this._userService.isLogged() 
       && this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
    }
}