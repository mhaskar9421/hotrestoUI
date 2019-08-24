import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {
  customerList: {};
  loading = false;
  showButton: true;
  selectedMenu: 'dashboard';

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    let dashboard = this.router.url.indexOf('dashboard');
    let customer = this.router.url.indexOf('customer');
    if (dashboard != -1) { this.selectedMenu = 'dashboard'; this.showButton = false; }
    if (customer != -1) { this.selectedMenu = 'customer'; this.showButton = false; }
    this.viewCustomer();
  }

  viewCustomer() {
    this.loading = true;
    this.customerService.viewCustomerDetails()
      .subscribe(
      data => {
        if (data) {
          this.loading = false;
          this.customerList = data;
        } else {
          this.loading = false;
          this.customerList = null;
        }
      },
      error => {
        console.log(error);
        this.loading = false;
      });
  }

}
