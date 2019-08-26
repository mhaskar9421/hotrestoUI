import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomTableComponent } from '../room-table/room-table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit {

  formView: false;
  constructor(private router: Router) { }

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
    this.roomcomponent.viewRooms();
  }

}
