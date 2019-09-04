import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookedCustomerService } from '../booked-customer-list/booked-customer-list.service';

@Component({
  selector: 'app-booked-customer-list',
  templateUrl: './booked-customer-list.component.html',
  styleUrls: ['./booked-customer-list.component.scss']
})
export class BookedCustomerListComponent implements OnInit {
  bookedCustomerList: {};
  loading = false;
  showCheckout: boolean = true;
  @Input() activeTab: string;
  @Output() checkoutEvent = new EventEmitter();

  constructor(private bookedcustomerService: BookedCustomerService) { }

  ngOnInit() {
    this.viewBookedCustomers();
  }

  viewBookedCustomers() {
    this.loading = true;
    this.bookedcustomerService.viewBookedCustomerList()
      .subscribe(
        data => {
          if (data) {
            this.loading = false;
            this.bookedCustomerList = data;
          } else {
            this.loading = false;
            this.bookedCustomerList = null;
          }
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }

  checkout(item) {
    this.checkoutEvent.emit({ showCheckout: this.showCheckout, item });
  }

}
