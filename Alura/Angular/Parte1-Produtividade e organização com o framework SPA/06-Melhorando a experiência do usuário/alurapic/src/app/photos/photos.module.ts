import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { CapitulosComponent } from './capitulos/capitulos.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescritpion } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';


@NgModule({
declarations: [PhotoComponent,
               PhotoListComponent,
               PhotoFormComponent,
               CapitulosComponent,
               PhotosComponent,
               FilterByDescritpion,
               LoadButtonComponent
            ],
imports : [HttpClientModule,
           CommonModule
        ]
})
export class PhotosModule {}