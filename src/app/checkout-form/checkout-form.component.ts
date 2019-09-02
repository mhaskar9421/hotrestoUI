import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  showCheckout: boolean = false;
  document: Document;
  @Output() checkoutEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  printInvoice(printArea) {
    //   var divToPrint = document.getElementById('printArea');
    //   newWin.document.write('<button onload="window.print()">' + printArea.innerHTML + '</button>');
    //   newWin.document.close();
    //   setTimeout(function () { newWin.close(); }, 10);
    var input = (<HTMLInputElement>document.getElementById('amount')).value;
    var printContents = document.getElementById(printArea).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    console.log(originalContents);
    document.body.innerHTML = originalContents;
    (<HTMLInputElement>document.getElementById('amount')).value = input;
  }

  callCustomerList() {
    this.checkoutEvent.emit(this.showCheckout);
  }

}
