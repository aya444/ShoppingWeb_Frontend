import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {environment} from "../environments/environment";
import {Sellingcompany} from "../models/sellingcompany";
import {Product} from "../models/product";
import {environment} from "../environments/environment";
import {Orders} from "../models/orders";

@Injectable({
  providedIn: 'root'
})
export class SellingcompanyService {

  constructor(private http: HttpClient) {
  }

  login(sellingcompany: any): Observable<any> {
    return this.http.post<any>(environment.AppUrl + `selling/login`, sellingcompany);
  }


  getProductsOnSale(username: string): Observable<Product[]> {
    return this.http.get<Product[]>(environment.AppUrl + `selling/sale/${username}`);
  }

  getOrders(username: string): Observable<Orders[]> {
    return this.http.get<Orders[]>(environment.AppUrl + `selling/getorders/${username}`);
  }

  addProduct(username: string, newProduct: Product): Observable<any> {
    return this.http.post(environment.AppUrl + `selling/add/${username}`, newProduct);
  }
}
