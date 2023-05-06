import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductSrcService {
productUrl='https://fakestoreapi.com/products';
  constructor(private http:HttpClient) { }
  
getProduct() {
  return this.http.get(this.productUrl)
}
}
