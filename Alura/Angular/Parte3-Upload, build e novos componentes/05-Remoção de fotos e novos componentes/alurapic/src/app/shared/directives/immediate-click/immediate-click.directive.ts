import { Directive, ElementRef, OnInit } from '@angular/core';

import { PlatformDetectorService } from 'src/app/core/plataform-detector/platform-detector.service';

@Directive
({
    selector:'[ImmediateClick]'
    
})

export class ImmediateClickDirective implements OnInit{
    constructor(
        private _element:ElementRef<any>,
        private _platFormDetector: PlatformDetectorService){}

        ngOnInit(): void {            
            this._platFormDetector.isPlatformBrowser && 
            this._element.nativeElement.click();
    }
}