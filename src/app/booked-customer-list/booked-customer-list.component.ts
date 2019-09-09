import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BookedCustomerService } from '../booked-customer-list/booked-customer-list.service';
import { DataService } from "../data.service";

@Component({
  selector: 'app-booked-customer-list',
  templateUrl: './booked-customer-list.component.html',
  styleUrls: ['./booked-customer-list.component.scss']
})
export class BookedCustomerListComponent implements OnInit {
  bookedCustomerList: {};
  invoiceObjList: {};
  loading = false;
  showCheckout: boolean = true;
  showEditBooking: boolean = true;
  showCustomer: boolean;
  @Input() activeTab: string;
  @Output() checkoutEvent = new EventEmitter();
  @Output() bookingFormEvent = new EventEmitter();

  constructor(private data: DataService, private router: Router, private bookedcustomerService: BookedCustomerService) { }

  ngOnInit() {
    this.viewBookedCustomers();
    this.showCustomer = false;
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

  bookedRoomForm(item) {
    this.data.setBookingFormValue(true);
    this.data.getItem(item);
    //this.bookingFormEvent.emit({ showEditBooking: this.showEditBooking, item });
  }
}
