import { Component } from '@angular/core';
import {Shippingcompany} from "../../models/shippingcompany";
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../models/customer";
@Component({
  selector: 'app-list-customer-accounts',
  templateUrl: './list-customer-accounts.component.html',
  styleUrls: ['./list-customer-accounts.component.css']
})
export class ListCustomerAccountsComponent {
  // username: string = '';
  // customers: any[] = [];
  //
  // constructor(private route: ActivatedRoute, private service: AdminService, private router: Router) { }
  //
  // ngOnInit(): void {
  //   this.username = this.route.snapshot.paramMap.get('username') || '';
  //   this.loadCustomers();
  // }
  //
  // loadCustomers() {
  //   this.service.getAllCustomers(this.username)
  //     .subscribe(
  //       (data: any[]) => {
  //         this.customers = data;
  //       }, error => {
  //         console.log(error);
  //       });
  // }
  //
  // gotoAdminMenu(username: string) {
  //   this.router.navigate(['/admin-menu', username]);
  // }

  username: string = '';
  customers: any[] = [];

  constructor(private route: ActivatedRoute, private service: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || '';
    this.loadCustomers();
  }

  loadCustomers() {
    this.service.getAllCustomers(this.username)
      .subscribe(
        (data: any[]) => {
          this.customers = data;
        }, error => {
          console.log(error);
        });
  }

  gotoAdminMenu(username: string) {
    this.router.navigate(['/admin-menu', username]);
  }
}
