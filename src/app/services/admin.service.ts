import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Shippingcompany} from "../models/shippingcompany";
import {environment} from "../environments/environment";
import {Admin} from "../models/admin";
import {Sellingcompany} from "../models/sellingcompany";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  createSellers(username: string, companyNames: string[]): Observable<string> {
    const url = environment.AppUrl+`admin/create-seller/${username}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(companyNames);
    return this.http.post<string>(url, body, { headers });
  }

  registerShippingCompany(username: string, shippingCompany: Shippingcompany): Observable<string> {
    return this.http.post<string>(environment.AppUrl+`admin/create-shipping/${username}`, shippingCompany);
  }

  getAllCustomers(username: string): Observable<any[]> {
    return this.http.get<any[]>(environment.AppUrl+`admin/getallcustomers/${username}`);
  }

  getAllShippingCompanies(username: string): Observable<any[]> {
    return this.http.get<any[]>(environment.AppUrl+`admin/getallshipping/${username}`);
  }

  getAllSellingCompanies(username: string): Observable<any[]> {
    return this.http.get<any[]>(environment.AppUrl+`admin/getallselling/${username}`);
  }

  login(admin: any): Observable<any> {
    return this.http.post<any>(environment.AppUrl+ 'admin/login', admin);
  }

  get(username: string): Observable<Admin> {
    return this.http.get<Admin>(environment.AppUrl + `get/${username}`);
  }

}
