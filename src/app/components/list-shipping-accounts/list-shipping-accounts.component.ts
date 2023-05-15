import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-list-shipping-accounts',
  templateUrl: './list-shipping-accounts.component.html',
  styleUrls: ['./list-shipping-accounts.component.css']
})
export class ListShippingAccountsComponent {
  username: string = '';
  shippingCompanies: any[] = [];

  constructor(private route: ActivatedRoute, private service: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || '';
    this.loadShippingCompanies();
  }

  loadShippingCompanies() {
    this.service.getAllShippingCompanies(this.username)
      .subscribe(
        (data: any[]) => {
      this.shippingCompanies = data;
    }, error => {
      console.log(error);
    });
  }

  gotoAdminMenu(username: string) {
    this.router.navigate(['/admin-menu', username]);
  }
}
