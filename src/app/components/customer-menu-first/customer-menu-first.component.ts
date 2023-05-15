import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-menu-first',
  templateUrl: './customer-menu-first.component.html',
  styleUrls: ['./customer-menu-first.component.css']
})
export class CustomerMenuFirstComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createRegister() {
    this.router.navigate(['/register-customer']);
  }

  loginCustomer() {
    this.router.navigate(['/login-customer']);
  }

}
