import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._route.snapshot.params['photoId'];
    console.log(id);
  }

}
