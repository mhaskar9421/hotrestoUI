import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { notificationMessages } from '../../notificationMessages';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {
  customerList: {};
  loading = false;
  showCheckout: boolean = true;
  @Input() activeTab: string;
  @Output() checkoutEvent = new EventEmitter<boolean>();

  constructor(public constants: notificationMessages, private customerService: CustomerService, private _snackBar: MatSnackBar, ) { }

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

  deleteCustomer(item) {
    this.customerService.deleteCustomer(item)
      .subscribe(data => {
        this._snackBar.open(this.constants.deleteCustomer, '', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        this.viewCustomer();
      })
  };

  checkout() {
    this.checkoutEvent.emit(this.showCheckout);
  }

}
