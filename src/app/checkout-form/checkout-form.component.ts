import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { getTaxService } from './checkout-form.service';
import { DataService } from "../data.service";

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  showCheckout: boolean = false;
  finalTotal = 0;
  document: Document;
  taxData: {};
  roomCharges: Number;
  extraOccupancy: Number;
  checkinDate = Object;
  checkoutDate = Object;
  foodBillNumber: Number;
  taxAmount: Number;
  @Input() checkoutData: Object;
  message: string;
  item: {};
  customerInfo: {};
  roomInfo: {};
  room_id: number;
  customer_id: number;
  bookingdate: string;
  invoiceNo: string;
  foodBillAmount: number;
  customer_name: string;
  customer_mobile: string;
  customer_address: string;
  room_name: string;
  room_number: number;
  GST: number;
  GSTAmount: number;
  totalRoomAmount: number;
  @Output() checkoutEvent = new EventEmitter<boolean>();
  constructor(private data: DataService, private gettaxService: getTaxService) { }

  ngOnInit() {
    this.invoiceNo = this.checkoutData['booking_id'];
    this.bookingdate = this.checkoutData['booking_date'];
    this.roomCharges = this.checkoutData['room_charges'];
    this.totalRoomAmount = this.checkoutData['totalRoomCharges'];
    this.extraOccupancy = this.checkoutData['extra_occupancy'];
    this.foodBillNumber = this.checkoutData['food_bill_number'];
    this.foodBillAmount = this.checkoutData['food_bill_amount'];
    this.checkinDate = this.checkoutData['checkin_date'];
    this.checkoutDate = this.checkoutData['checkout_date'];
    this.finalTotal = this.checkoutData['grandTotal'];
    this.GST = this.checkoutData['GST'];
    this.GSTAmount = this.checkoutData['totalGSTAmount'];
    this.getRoomCustDetails(this.checkoutData['customer_id'], this.checkoutData['room_id']);
  }

  printInvoice(printArea) {
    var printContents = document.getElementById(printArea).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  callCustomerList() {
    this.checkoutEvent.emit(this.showCheckout);
  }

  getRoomCustDetails(customerId, roomId) {
    this.gettaxService.getRoomCustDetails(customerId, roomId)
      .subscribe(
        data => {
          if (data) {
            this.customerInfo = data['customerInfo'][0];
            this.customer_name = this.customerInfo['customer_name'];
            this.customer_mobile = this.customerInfo['customer_mobile'];
            this.customer_address = this.customerInfo['customer_address'];
            this.roomInfo = data['roomInfo'][0];
            this.room_name = this.roomInfo['room_name'];
            this.room_number = this.roomInfo['room_number'];
          }
        },
        error => {
          console.log(error);
        });
  }
}
