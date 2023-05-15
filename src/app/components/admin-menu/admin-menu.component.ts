import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {
  username!: string;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
  }

  gotoCreateSeller(username: string) {
    this.router.navigate(['/create-seller', username]);
  }

  gotoCreateShipping(username: string) {
    this.router.navigate(['/create-shipping', username]);
  }

  gotoListSeller(username: string) {
    this.router.navigate(['/list-seller', username]);
  }

  gotoListShipping(username: string) {
    this.router.navigate(['/list-shipping', username]);
  }

  gotoListCustomers(username: string) {
    this.router.navigate(['/list-customer', username]);
  }
}
