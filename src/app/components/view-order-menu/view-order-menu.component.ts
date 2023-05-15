import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-view-order-menu',
  templateUrl: './view-order-menu.component.html',
  styleUrls: ['./view-order-menu.component.css']
})
export class ViewOrderMenuComponent {
  username!: string;
  status!: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
    this.status = this.route.snapshot.paramMap.get('status') ?? '';
  }

  viewPast(username: string, status: string) {
    this.router.navigate(['/view-sale'], { queryParams: { username: username, status: status } });
  }

  viewCurrent(username: string, status: string) {
    this.router.navigate(['/view-sale'], { queryParams: { username: username, status: status } });
  }

}
