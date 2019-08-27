import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  showCheckout: boolean = false;
  @Output() checkoutEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  callCustomerList() {
    this.checkoutEvent.emit(this.showCheckout);
  }

}
