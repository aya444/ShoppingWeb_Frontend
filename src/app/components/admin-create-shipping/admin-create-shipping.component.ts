import { Component } from '@angular/core';
import {Shippingcompany} from "../../models/shippingcompany";
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-create-shipping',
  templateUrl: './admin-create-shipping.component.html',
  styleUrls: ['./admin-create-shipping.component.css']
})
export class AdminCreateShippingComponent {
  shippingCompany: Shippingcompany= new Shippingcompany();
  username!: string;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
  }

  createShippingCompany(): void {
    this.adminService.registerShippingCompany(this.username, this.shippingCompany)
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
  gotoAdminMenu(username: string) {
    this.router.navigate(['/admin-menu', username]);
  }

}
