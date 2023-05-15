import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../environments/environment";
// import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {
  }

  register(customer: any): Observable<any> {
    return this.http.post<any>(environment.AppUrl + 'customer/signup', customer);
  }

  login(customer: any): Observable<any> {
    return this.http.post<any>(environment.AppUrl + 'customer/login', customer);
  }

  viewOrders(username:string, status: string): Observable<any> {
    return this.http.get<any>(environment.AppUrl + `customer/view/${username}/${status}`);
  }

  newPurchase(username:string, order: any): Observable<any> {
    return this.http.post<any>(environment.AppUrl + `customer/newOrder/${username}`, order);
  }

}
