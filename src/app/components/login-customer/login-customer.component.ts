import { Component } from '@angular/core';
import {Sellingcompany} from "../../models/sellingcompany";
import {SellingcompanyService} from "../../services/sellingcompany.service";
import {Router} from "@angular/router";
import {Customer} from "../../models/customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent {
  customer: Customer = new Customer();
  submitted = false;
  constructor(private customerService: CustomerService, private router: Router) { }

  login(): void {

    this.customerService.login(this.customer)
      .subscribe(data => {
          console.log(data)
          this.customer = new Customer();
          this.gotoCustomerMenu(this.customer.custName);
        },
        error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.login();
  }

  gotoCustomerMenu(username: string) {
    this.router.navigate(['/customer-menu', username]);
  }
}
