import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-selling-menu',
  templateUrl: './selling-menu.component.html',
  styleUrls: ['./selling-menu.component.css']
})
export class SellingMenuComponent {
  username!: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
  }

  viewProductsonSale(username: string) {
    this.router.navigate(['/view-sale', username]);
  }

  viewPreviousProducts(username: string) {
    this.router.navigate(['/view-sold', username]);
  }

  addProduct(username: string) {
    this.router.navigate(['/add-product', username]);
  }
}
