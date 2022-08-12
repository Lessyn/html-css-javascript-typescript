import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-details',
  templateUrl: './photo-details.component.html'
  
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private _route:ActivatedRoute,
    private _photoService: PhotoService,
    private _router:Router
    ) { }

  ngOnInit(): void {
    
    this.photoId = this._route.snapshot.params['photoId'];
    this.photo$ = this._photoService.findById(this.photoId);
      }

      remove(){
        this._photoService
        .removePhoto(this.photoId)
        .subscribe(() => this._router.navigate(['']));
      }
}