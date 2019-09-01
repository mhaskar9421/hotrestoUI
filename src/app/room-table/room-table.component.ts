import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomTableService } from './room-table.service';
import { MatSnackBar } from '@angular/material';
import { notificationMessages } from '../../notificationMessages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.scss'],
  providers: [RoomTableService]
})
export class RoomTableComponent implements OnInit {
  @Input() tabTitle: string;
  @Input() activeTab: string;
  formView: boolean = true;
  loading = false;
  @Input() roomList: {};

  @Output() formEvent = new EventEmitter<boolean>();

  constructor(private router: Router, private _snackBar: MatSnackBar, private roomTableService: RoomTableService, public constants: notificationMessages) { }

  ngOnInit() {
    if (this.activeTab != 'book-room' || localStorage.getItem('showRoomList')) {
      this.viewRooms();
      localStorage.removeItem('showRoomList');
    }
  }

  callbookRoomForm() {
    this.formEvent.emit(this.formView);
  }

  viewRooms() {
    this.loading = true;
    this.roomTableService.viewRoom()
      .subscribe(
        data => {
          if (data) {
            this.loading = false;
            this.roomList = data;
          } else {
            this.loading = false;
            this.roomList = null;
          }
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }

  getAvaliableRooms() {
    this.loading = true;
    this.roomTableService.getAvaliableRooms()
      .subscribe(
        data => {
          if (data) {
            this.loading = false;
            this.roomList = data;
          } else {
            this.loading = false;
            this.roomList = null;
          }
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }



  deleteRoom(item) {
    this.roomTableService.deleteRoom(item)
      .subscribe(data => {
        this._snackBar.open(this.constants.deleteRoom, '', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        this.viewRooms();
      })
  }

}
