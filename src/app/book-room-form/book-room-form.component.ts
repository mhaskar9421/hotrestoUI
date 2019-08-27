import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-book-room-form',
  templateUrl: './book-room-form.component.html',
  styleUrls: ['./book-room-form.component.scss']
})
export class BookRoomFormComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  formView: boolean = false;
  @Input() activeTab: string;
  @ViewChild('stepper') stepper: MatStepper;
  isEditable = true;
  @Output() formEvent = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      idtype: ['', Validators.required],
      idnumber: ['', Validators.required],
      phonenumber: ['', Validators.required],
      address: ['', Validators.required],
      uploadid: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      roomnumber: ['', Validators.required],
      noofdays: ['', Validators.required],
      roomamount: ['', Validators.required],
      extraoccupancy: ['', Validators.required],
      totalamount: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      billamount: ['', Validators.required],
      paymenttype: ['', Validators.required],
      paidamount: ['', Validators.required],
      paymentstatus: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log("submit the form");
  }

  move(index: number) {
    this.stepper.selectedIndex = index;
  }
  callRoomTable() {
    this.formEvent.emit(this.formView);
    localStorage.setItem('showRoomList', 'true');
  }
}
