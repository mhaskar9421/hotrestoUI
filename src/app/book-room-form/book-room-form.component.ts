import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material';
import { BookRoomModel } from './book-room-form.model';
import { BookRoomFormService } from './book-room-form.service';
import { notificationMessages } from '../../notificationMessages';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-book-room-form',
  templateUrl: './book-room-form.component.html',
  styleUrls: ['./book-room-form.component.scss']
})
export class BookRoomFormComponent implements OnInit {
  public bookroommodel: BookRoomModel;
  loading = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  formView: boolean = false;
  bookForm: {};
  customerList: {};
  viewCustomer = false;
  @Input() activeTab: string;
  @ViewChild('stepper') stepper: MatStepper;
  isEditable = true;
  @Output() formEvent = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService, private bookroomformService: BookRoomFormService, public constants: notificationMessages, private _snackBar: MatSnackBar) {
    this.bookroommodel = new BookRoomModel();
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      customerId: [''],
      name: [''],
      idtype: [''],
      idnumber: [''],
      phonenumber: [''],
      address: [''],
      uploadid: [''],
      roomamount: [''],
      extraoccupancy: ['']
    });
    this.thirdFormGroup = this.formBuilder.group({
      billamount: ['', Validators.required],
      paymenttype: ['', Validators.required],
      paidamount: ['', Validators.required],
      totalamount: ['', Validators.required],
      paymentstatus: ['', Validators.required]
    });
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
    this.loading = true;
    this.bookForm = {
      "bookingInfo": this.firstFormGroup.value,
      "paymentInfo": this.thirdFormGroup.value
    };
    console.log(this.bookForm);
    this.bookroomformService.bookRoom(this.bookForm)
      .subscribe(
        data => {
          console.log(data);
          this.loading = false;
          this._snackBar.open(this.constants.roomBooked, '', {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }

  move(index: number) {
    this.stepper.selectedIndex = index;
  }

  callRoomTable() {
    this.formEvent.emit(this.formView);
    localStorage.setItem('showRoomList', 'true');
  }

  viewCustomerForm() {
    this.viewCustomer = !this.viewCustomer;
  }

  calculateTotal() {
    this.thirdFormGroup.controls.totalamount.setValue(parseInt(this.firstFormGroup.controls.roomamount.value) + parseInt(this.firstFormGroup.controls.extraoccupancy.value));
  }

}
