import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  private _productList: Product[] = [];


  public get productList(): Product[] {
    return this._productList;
  }
  
  public set productList(products: Product[]) {
    if (products) {
      this._productList = products;
    } 
  }

  urlAPI = "https://api.escuelajs.co/api/v1/products";

  producto: Product = {
    title: '',
    price: 0,
    description: '',
    // categoryId: 0, 
    category: {
      id: -1,
      name: '',
      image: ''
    },
    images: []
  };

  //GET products: https://api.escuelajs.co/api/v1/products
  public getProducts(): Observable<any> {
    return this.http.get(this.urlAPI);
  }

  //GET product: https://api.escuelajs.co/api/v1/products/id
  public getProduct(id: number): Observable<any> {
    return this.http.get(`${this.urlAPI}/${id}`);
  }

  //POST: https://api.escuelajs.co/api/v1/products
  public createProduct(product: Product): Observable<any> {
    return this.http.post(this.urlAPI, product);
  }

  // DELETE product: https://api.escuelajs.co/api/v1/products/id
  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.urlAPI}/${id}`);
  }

  // PUT product: https://api.escuelajs.co/api/v1/products/id
  public updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.urlAPI}/${this.producto.id}`, product);
  }

  //Filtros:

  public getByTitle(title: String): Observable<any> {
    return this.http.get(`${this.urlAPI}/?title=${title}`);
  }

  public getByPrice(price: number): Observable<any> {
    return this.http.get(`${this.urlAPI}/?price=${price}`);
  }

  public getByPriceRange(priceMin: number, priceMax: number): Observable<any> {
    return this.http.get(`${this.urlAPI}/?price_min=${priceMin}_max=${priceMax}`);
  }

}
