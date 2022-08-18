import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  personagens = [];

  constructor(private _http: HttpClient){}

    ngOnInit(): void {
      this.getPersonagens().subscribe((data: any) => console.log(data))
    
    }  
  
  getPersonagens(){
    return this._http.get<any>("https://rickandmortyapi.com/api/character");
} 
}

