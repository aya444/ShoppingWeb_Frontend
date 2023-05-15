import { Component } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-admin-create-seller',
  templateUrl: './admin-create-seller.component.html',
  styleUrls: ['./admin-create-seller.component.css']
})
export class AdminCreateSellerComponent {
  username!: string;
  companyNames: string[] = [];
  successMessage: string = '';
  companyName: string = '';

  constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';;
  }

  addCompanyName(companyName: string): void {
    this.companyNames.push(companyName);
  }

  onSubmit(): void {
    this.adminService.createSellers(this.username, this.companyNames)
      .subscribe(
        response => {
          this.successMessage = response;
          this.companyNames = [];
        },
        error => console.error(error)
      );
  }

  gotoAdminMenu(username: string) {
    this.router.navigate(['/admin-menu', username]);
  }
}
