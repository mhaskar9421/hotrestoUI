import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomTableComponent } from '../room-table/room-table.component';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit {

  constructor() { }

  @ViewChild(RoomTableComponent) roomcomponent: RoomTableComponent;

  ngOnInit() {
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  getAvaliableRooms() {
    this.roomcomponent.viewRooms();
  }

}
