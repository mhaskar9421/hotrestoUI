import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {
  customerList: {};
  loading = false;
  showCustomer: true;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
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
