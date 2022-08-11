import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit{
    
    @Input() photoId: number;
    
    comments$: Observable<PhotoComment[]>
    commentForm: FormGroup;

    constructor(
        private _photoService: PhotoService,
        private _formBuilder: FormBuilder){}
    
    ngOnInit(): void {       
        
        this.comments$ = this._photoService.getComments(this.photoId);
        this.commentForm = this._formBuilder.group({
            comment:['', Validators.maxLength(300)]
        })
    }
}