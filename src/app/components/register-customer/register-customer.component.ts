import { Component } from '@angular/core';
import {Shippingcompany} from "../../models/shippingcompany";
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../models/customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent {
  customer: Customer= new Customer();

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createShippingCompany(): void {
    this.customerService.register(this.customer)
      .subscribe(
        response => {
          console.log(response);
          // Handle successful response
        },
        error => {
          console.log(error);
          // Handle error
        });
  }
  gotToCustomerFirstMenu(){
    this.router.navigate(['/customer-menu-first']);
  }
}
