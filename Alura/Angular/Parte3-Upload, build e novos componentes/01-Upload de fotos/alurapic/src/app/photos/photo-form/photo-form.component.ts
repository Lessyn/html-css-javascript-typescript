import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;

  constructor(
    private _formBuilder: FormBuilder,
    private _photoService: PhotoService,
    private _router:Router
    ) { }

  ngOnInit(): void {

    this.photoForm = this._formBuilder.group({
      file: ['', Validators.required],
      description:['', Validators.maxLength(300)],
      allowComments:[true]
    })
  }

  upload(){
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    this._photoService
    .upload(description, allowComments, this.file)
    .subscribe(() => this._router.navigate(['']));
    
  }

}
