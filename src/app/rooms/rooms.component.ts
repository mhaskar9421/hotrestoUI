import { Component, OnInit } from '@angular/core';
import { roomsModel } from './rooms.model';
import { RoomService } from './room.service';
import { notificationMessages } from '../../notificationMessages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addroom',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  providers: [RoomService, notificationMessages]
})
export class AddroomComponent implements OnInit {

  loading = false;
  errorText: string;
  errorDisplay: true;
  roomList: {};
  public model: roomsModel;

  constructor(private router: Router, private roomService: RoomService, public constants: notificationMessages) {
    this.model = new roomsModel();
  }

  ngOnInit() {
    this.viewRooms();
  }

  viewRooms() {
    this.loading = true;
    this.roomService.viewRoom()
      .subscribe(
        data => {
          if (data) {
            this.loading = false;
            this.roomList = data;
          }
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }

  addRoom() {
    this.loading = true;
    this.roomService.addRoom(this.model.roomname, this.model.roomnumber, this.model.noofbeds)
      .subscribe(
        data => {
          if (data) {
            this.loading = false;
            this.viewRooms();
          }
          // else {
          //   this.loading = true;
          //   this.errorDisplay = true;
          //   this.errorText = this.constants.loginFailed;
          // }
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }
}
