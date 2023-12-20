import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  urlAPI=`https://api.escuelajs.co/api/v1/categories`;

  constructor(private http: HttpClient) { }

  //GET categorys: https://api.escuelajs.co/api/v1/products
  public getCategorys():Observable<any>{
    return this.http.get(this.urlAPI);
  }
}
