import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { CustomerModel } from './customer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  public customermodel: CustomerModel;
  loading = true;
  submitted = false;

  constructor(private router: Router, private route: ActivatedRoute, private customerService: CustomerService) {
    this.customermodel = new CustomerModel();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  addCustomer() {
    this.customerService.addCust(this.customermodel.customername, this.customermodel.custid, this.customermodel.idnumber, this.customermodel.phonenumber, this.customermodel.address)
      .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
        this.loading = false;
      });
  }
}
