import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SellingcompanyService} from "../../services/sellingcompany.service";
import {Orders} from "../../models/orders";

@Component({
  selector: 'app-view-sold-products',
  templateUrl: './view-sold-products.component.html',
  styleUrls: ['./view-sold-products.component.css']
})
export class ViewSoldProductsComponent {
  username: string = '';
  products: any[] = [];

  constructor(private route: ActivatedRoute, private sellingcompanyService: SellingcompanyService, private router: Router) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || '';
    this.getSoldProducts();
  }

  getSoldProducts(): void {
    this.sellingcompanyService.getOrders(this.username)
      .subscribe(
        response => {
          this.products = response;
        },
        error => {
          console.log(error);
        }
      );
  }
  gotoSellingMenu(username: string) {
    this.router.navigate(['/selling-menu', username]);
  }
}
