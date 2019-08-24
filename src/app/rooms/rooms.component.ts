import { Component, OnInit, ViewChild } from '@angular/core';
import { roomsModel } from './rooms.model';
import { RoomService } from './room.service';
import { notificationMessages } from '../../notificationMessages';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { filter } from 'rxjs/operators';
import { RoomTableComponent } from '../room-table/room-table.component';

@Component({
  selector: 'app-addroom',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  providers: [RoomService, notificationMessages, RoomTableComponent]
})
export class AddroomComponent implements OnInit {

  loading = false;
  showCustomer = false;
  errorText: string;
  errorDisplay: true;
  roomList: {};
  public model: roomsModel;

  constructor(private router: Router, private _snackBar: MatSnackBar, private roomService: RoomService, public constants: notificationMessages) {
    this.model = new roomsModel();
  }

  @ViewChild(RoomTableComponent) roomcomponent: RoomTableComponent;

  ngOnInit() {
    this.showCustomer = false;
  }

  addRoom() {
    this.loading = true;
    this.roomService.addRoom(this.model.roomname, this.model.roomnumber, this.model.noofbeds, this.model.image)
      .subscribe(
        data => {
          if (data) {
            this.loading = false;
            this._snackBar.open(this.constants.addRoom, '', {
              duration: 5000,
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
            this.roomcomponent.viewRooms();
          }
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }
}
