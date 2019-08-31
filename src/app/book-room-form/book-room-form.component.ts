import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material';
import { BookRoomModel } from './book-room-form.model';
import { BookRoomService } from './book-room-form.service';
import { notificationMessages } from '../../notificationMessages';

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
  @Input() activeTab: string;
  @ViewChild('stepper') stepper: MatStepper;
  isEditable = true;
  @Output() formEvent = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private bookroomService: BookRoomService, public constants: notificationMessages, private _snackBar: MatSnackBar) {
    this.bookroommodel = new BookRoomModel();
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      name: [''],
      idtype: [''],
      idnumber: [''],
      phonenumber: [''],
      address: [''],
      uploadid: ['']
    });
    //this.firstFormGroup.disable();
    //this.firstFormGroup.enable();

    this.secondFormGroup = this.formBuilder.group({
      roomtype: ['', Validators.required],
      roomnumber: ['', Validators.required],
      noofdays: ['', Validators.required],
      roomamount: ['', Validators.required],
      extraoccupancy: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      billamount: ['', Validators.required],
      paymenttype: ['', Validators.required],
      paidamount: ['', Validators.required],
      totalamount: ['', Validators.required],
      paymentstatus: ['', Validators.required]
    });
  }
  onSubmit() {
    this.loading = true;
    this.bookForm = {
      "customerInfo": this.firstFormGroup.value,
      "roomInfo": this.secondFormGroup.value,
      "paymentInfo": this.thirdFormGroup.value
    };
    console.log(this.bookForm);
    this.bookroomService.bookRoom(this.bookForm)
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
}
