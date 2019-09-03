import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  showCheckout: boolean = false;
  document: Document;
  $: this;
  @Output() checkoutEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
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

}
