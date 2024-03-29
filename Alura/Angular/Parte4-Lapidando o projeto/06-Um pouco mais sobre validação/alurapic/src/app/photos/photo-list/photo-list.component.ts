import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading/loading.service';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit{

  photos: Photo[] = [];
  filter: string = '';  
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';  

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _photoService: PhotoService) { }  

  ngOnInit(): void {
    
    this._activatedRoute.params.subscribe(params => {
      this.userName = params['userName'];
      this.photos = this._activatedRoute.snapshot.data['photos'];    
    });
  }

  load(){
    this._photoService
    .listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore = false;
    });
  }
}