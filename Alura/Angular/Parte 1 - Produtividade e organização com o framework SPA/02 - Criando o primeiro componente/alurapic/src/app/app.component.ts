import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/White_Lion.jpg/330px-White_Lion.jpg",
      description: "Leao"
    },
    {
      url: "https://img.r7.com/images/moya-leao-branco-albino-atracao-glen-garriff-conservation-lion-sanctuary-23032021161517683?dimensions=771x420&no_crop=true",
      description: "Leoa"
    }
  ]

}
