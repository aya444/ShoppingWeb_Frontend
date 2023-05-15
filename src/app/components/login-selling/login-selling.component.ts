import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Sellingcompany} from "../../models/sellingcompany";
import {SellingcompanyService} from "../../services/sellingcompany.service";
import {Admin} from "../../models/admin";

@Component({
  selector: 'app-login-selling',
  templateUrl: './login-selling.component.html',
  styleUrls: ['./login-selling.component.css']
})
export class LoginSellingComponent {
  sellingcompany: Sellingcompany = new Sellingcompany();
  submitted = false;
  constructor(private sellingcompanyService: SellingcompanyService, private router: Router) { }

  login(): void {

    this.sellingcompanyService.login(this.sellingcompany)
      .subscribe(data => {
          console.log(data)
          this.sellingcompany = new Sellingcompany();
          this.gotoSellingcompanyMenu(this.sellingcompany.username);
        },
        error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.login();
  }

  gotoSellingcompanyMenu(username: string) {
    this.router.navigate(['/selling-menu', username]);
  }
}
