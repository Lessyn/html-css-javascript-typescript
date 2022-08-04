import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../core/token/token.service';
import { ProductInsertComponent } from './productInsert/productInsert.component';
import { ProductsModel } from './products.model';

const API_URL = 'https://rodrigo.reader.homologacao.inovamobil.com.br';

@Injectable({
    providedIn: 'root'
})

export class ProductsService{ 


    constructor(private _http:HttpClient, private _tokenService:TokenService) {}


addProducts(produto: ProductsModel): Observable<any>{

    let headers = new HttpHeaders()    
    .append('accept', 'application/json')
    .append('Content-Type', 'application/json-patch+json')
    .append('Authorization', 'Bearer ' + this._tokenService.getToken());



      return this._http.post(API_URL +'/api/produtos', produto,
      {headers: headers});
      
}

loadProducts(): Observable<any>{

 

    let headers = new HttpHeaders()    
    .append('accept', 'application/json')
    .append('Content-Type', 'application/json-patch+json')
    .append('Authorization', 'Bearer ' + this._tokenService.getToken());

    return this._http.get(`${API_URL}/api/produtos/1`,{headers: headers})
}

}