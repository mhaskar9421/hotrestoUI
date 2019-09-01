import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomTableComponent } from '../room-table/room-table.component';
import { Router } from '@angular/router';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS, MatSnackBar } from "@angular/material";
import { AppDateAdapter, APP_DATE_FORMATS } from '../date.adapter';
import { notificationMessages } from '../../notificationMessages';
import { BookRoomService } from './book-room.service';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class BookRoomComponent implements OnInit {
  checkinDate = Object;
  checkoutDate = Object;
  formView: false;
  roomList: {};
  loading: false;
  constructor(private router: Router, private getRooms: BookRoomService, public constants: notificationMessages, private _snackBar: MatSnackBar) { }
  minDate = new Date();
  maxDate = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000));

  @ViewChild(RoomTableComponent) roomcomponent: RoomTableComponent;

  ngOnInit() {
  }

  receiveEvent($event) {
    this.formView = $event;
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  getAvaliableRooms() {
    console.log(this.checkinDate);
    console.log(this.checkoutDate);
    this.getRooms.getAvaliableRooms(this.checkinDate, this.checkoutDate)
      .subscribe(
        data => {
          if (data) {
            this.loading = false;
            this.roomList = data;
            this._snackBar.open(this.constants.roomBooked, '', {
              duration: 5000,
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
          } else {
            this.loading = false;
            this.roomList = null;
          }
        },
        error => {
          console.log(error);
          this.loading = false;
        });
    //this.roomcomponent.viewRooms();
  }

}
