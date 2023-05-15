import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SellingcompanyService} from "../../services/sellingcompany.service";

@Component({
  selector: 'app-view-sale-products',
  templateUrl: './view-sale-products.component.html',
  styleUrls: ['./view-sale-products.component.css']
})
export class ViewSaleProductsComponent {
  username: string = '';
  products: any[] = [];

  constructor(private route: ActivatedRoute, private sellingcompanyService: SellingcompanyService, private router: Router) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || '';
    this.getProductsOnSale();
  }

  getProductsOnSale(): void {
    this.sellingcompanyService.getProductsOnSale(this.username)
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
