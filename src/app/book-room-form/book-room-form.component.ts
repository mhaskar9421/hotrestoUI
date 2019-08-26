import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-book-room-form',
  templateUrl: './book-room-form.component.html',
  styleUrls: ['./book-room-form.component.scss']
})
export class BookRoomFormComponent implements OnInit {
  formView: boolean = false;
  @Input() activeTab: string;
  @Output() formEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log(this.activeTab);
  }

  callRoomTable() {
    this.formEvent.emit(this.formView);
    localStorage.setItem('showRoomList', 'true');
  }

}
