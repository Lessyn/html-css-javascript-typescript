import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlatformDetectorService {

    constructor(@Inject(PLATFORM_ID) private _platformId: string) { }

    isPlatformBrowser() {
        return isPlatformBrowser(this._platformId)
    }

}
