import { Component } from '@angular/core';
import {Orders} from "../../models/orders";
import {CustomerService} from "../../services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent {
  order: Orders = new Orders();
  username!: string;

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
  }

  savePurchase() {
    this.customerService.newPurchase(this.username, this.order)
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

  gotoCustomerMenu(username: string) {
    this.router.navigate(['/customer-menu', username]);
  }

}
