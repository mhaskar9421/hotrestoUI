import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from '../rooms/room.service';
import { MatSnackBar } from '@angular/material';
import { notificationMessages } from '../../notificationMessages';

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.scss']
})
export class RoomTableComponent implements OnInit {
  @Input() tabTitle: string;
  loading = false;
  roomList: {};
  constructor(private _snackBar: MatSnackBar, private roomService: RoomService, public constants: notificationMessages) { }

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
    this.roomService.deleteRoom(item)
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
