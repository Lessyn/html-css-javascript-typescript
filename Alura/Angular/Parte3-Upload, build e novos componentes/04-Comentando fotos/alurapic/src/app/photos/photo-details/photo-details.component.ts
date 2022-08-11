import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoComments } from '../photo/photo-comments';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  comments$: Observable<PhotoComments[]>;

  constructor(
    private _route:ActivatedRoute,
    private _photoService: PhotoService
    ) { }

  ngOnInit(): void {
    
    const photoId = this._route.snapshot.params['photoId'];
    this.photo$ = this._photoService.findById(photoId);
    this.comments$ = this._photoService.getComments(photoId);

  }
}