import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VMessageComponent } from './vmessage.componenrt';

@NgModule({
    declarations: [VMessageComponent],
    exports: [VMessageComponent],
    imports: [CommonModule]
})

export class VMessageModule{}