import { Component, OnInit, Input } from '@angular/core';
import { RoomTableService } from './room-table.service';
import { MatSnackBar } from '@angular/material';
import { notificationMessages } from '../../notificationMessages';

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.scss'],
  providers: [RoomTableService]
})
export class RoomTableComponent implements OnInit {
  @Input() tabTitle: string;
  @Input() activeTab: string;
  loading = false;
  roomList: {};
  constructor(private _snackBar: MatSnackBar, private roomTableService: RoomTableService, public constants: notificationMessages) { }

  ngOnInit() {
    if (this.activeTab != 'book-room') { this.viewRooms(); }
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
