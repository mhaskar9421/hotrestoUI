import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  showCustomer: boolean = false;
  @Input() activeTab: string;
  @Output() checkoutEvent = new EventEmitter<boolean>();

  constructor(private router: Router, private customerService: CustomerService) { }

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

  checkout() {
    this.checkoutEvent.emit(this.showCustomer);
  }

}
