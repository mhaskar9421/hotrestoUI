import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  @Output() formEvent = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  callRoomTable() {
    this.formEvent.emit(this.formView);
    localStorage.setItem('showRoomList', 'true');
  }
}
