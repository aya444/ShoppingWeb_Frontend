import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css']
})
export class CustomerMenuComponent {
  username!: string;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
  }

  gotoNewPurchase(username: string) {
    this.router.navigate(['/new-purchase', username]);
  }

  gotoViewPurshases(username: string) {
    this.router.navigate(['/view-purchase-menu', username]);
  }
}
