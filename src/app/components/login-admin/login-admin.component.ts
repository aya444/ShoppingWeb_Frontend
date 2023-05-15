import { Component } from '@angular/core';
import {Admin} from "../../models/admin";
import {AdminService} from "../../services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  admin: Admin = new Admin();
  submitted = false;
  constructor(private AdminService: AdminService, private router: Router) { }
  login(): void {

    this.AdminService.login(this.admin)
      .subscribe(data => {
          console.log(data)
          this.admin = new Admin();
          this.gotoAdminMenu(this.admin.username);
        },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.login();
  }

  gotoAdminMenu(username: string) {
    this.router.navigate(['/admin-menu', username]);
  }
}
