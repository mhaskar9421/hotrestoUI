import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { getTaxService } from './checkout-form.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  showCheckout: boolean = false;
  subTotal = 0;
  finalTotal = 0;
  document: Document;
  taxData: {};
  @Input() checkoutData: Object;
  @Output() checkoutEvent = new EventEmitter<boolean>();
  constructor(private gettaxService: getTaxService) { }

  ngOnInit() {
    this.checkoutData;
    this.getTaxAmount();
    this.subTotal = parseInt(this.checkoutData['room_charges']) + parseInt(this.checkoutData['extra_occupancy']);
  }

  printInvoice(printArea) {
    var input = input.setAttribute("value", input.value)
    var printContents = document.getElementById(printArea).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = input;
    document.body.innerHTML = printContents;
    window.print();

    document.body.innerHTML = originalContents;
  }

  callCustomerList() {
    this.checkoutEvent.emit(this.showCheckout);
  }

  getTaxAmount() {
    this.gettaxService.getTaxData()
      .subscribe(
        data => {
          if (data) {
            this.taxData = data[0];
            this.finalTotal = this.subTotal + (this.subTotal * parseInt(this.taxData['tax_amount']) / 100);
          } else {
            this.taxData = 0;
          }
        },
        error => {
          console.log(error);
        });
  }

}
