import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/component/card/card.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoModule } from '../photo/photo.module';
import { FilterByDescritpion } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescritpion,
        SearchComponent
    ],

    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule,
        RouterModule
]
})
export class PhotoListModule{}