import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-list-selling-accounts',
  templateUrl: './list-selling-accounts.component.html',
  styleUrls: ['./list-selling-accounts.component.css']
})
export class ListSellingAccountsComponent {
  username: string = '';
  sellingCompanies: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || '';
    this.getSellingCompanies();
  }

  getSellingCompanies(): void {
    this.adminService.getAllSellingCompanies(this.username)
      .subscribe(
        (response: any[]) => {
          this.sellingCompanies = response;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  gotoAdminMenu(username: string) {
    this.router.navigate(['/admin-menu', username]);
  }
}
