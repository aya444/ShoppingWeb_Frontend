import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {environment} from "../environments/environment";
import {Shippingcompany} from "../models/shippingcompany";
import {Regions} from "../models/regions";
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ShippingcompanyService {

  constructor(private http: HttpClient) {
  }

  login(shippingcompany: Shippingcompany): Observable<any> {
    return this.http.post(environment.AppUrl + `shipping/login`, shippingcompany);
  }

  addRegion(id: number, region: Regions): Observable<any> {
    return this.http.post(environment.AppUrl + `shipping/add/${id}`, region);
  }

  processRequest(id: number): Observable<string> {
    return this.http.get<string>(environment.AppUrl + `shipping/process_requests/${id}`);
  }
}
