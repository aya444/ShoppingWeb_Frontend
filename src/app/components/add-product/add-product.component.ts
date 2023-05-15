import { Component } from '@angular/core';
import {Shippingcompany} from "../../models/shippingcompany";
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../models/product";
import {SellingcompanyService} from "../../services/sellingcompany.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: Product= new Product();
  username!: string;

  constructor(
    private sellingcompanyService: SellingcompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
  }

  addProduct(): void {
    this.sellingcompanyService.addProduct(this.username, this.product)
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

  gotoSellingMenu(username: string) {
    this.router.navigate(['/selling-menu', username]);
  }
}
