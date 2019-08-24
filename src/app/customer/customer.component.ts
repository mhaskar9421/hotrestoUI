import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { CustomerModel } from './customer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { notificationMessages } from '../../notificationMessages';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  public customermodel: CustomerModel;
  loading = true;
  submitted = false;
  customerList: {};
  showCustomer = true;
  selectedMenu = "";

  constructor(private router: Router, public constants: notificationMessages, private route: ActivatedRoute, private _snackBar: MatSnackBar, private customerService: CustomerService) {
    this.customermodel = new CustomerModel();
  }

  ngOnInit() {
    let customer = this.router.url.indexOf('customer');
    if (customer != -1) { this.selectedMenu = 'customer'; this.showCustomer = true; }
    this.viewCustomerDetails();
  }

  viewCustomerDetails() {
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
    this.customerService.addCustomer(this.customermodel.customername, this.customermodel.custid, this.customermodel.idnumber, this.customermodel.phonenumber, this.customermodel.address, this.customermodel.image)
      .subscribe(
      data => {
        this.loading = false;
        this._snackBar.open(this.constants.addCustomer, '', {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        this.viewCustomerDetails();
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
        this.viewCustomerDetails();
      })
  };

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const productImage = event.target.files[0];
      const formData = new FormData();
      formData.append('productImage', productImage);
      console.log(formData);
    }
  }

}
