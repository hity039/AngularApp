import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http : HttpClient) { }

  getProductList():Observable<any>{
    return this.http.get<Product>(environment.api_url);
  }
}
