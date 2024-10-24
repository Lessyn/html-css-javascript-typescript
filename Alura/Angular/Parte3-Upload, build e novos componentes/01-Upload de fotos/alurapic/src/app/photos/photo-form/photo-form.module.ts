import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from 'src/app/shared/component/vmessage/vmessage.module';
import { PhotoFormComponent } from './photo-form.component';

@NgModule ({
    declarations: 
    [
        PhotoFormComponent
    ],

    imports: 
    [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule
    ]
})
export class PhotoFormModule{}