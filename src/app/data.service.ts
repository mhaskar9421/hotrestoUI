import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private itemObject = new BehaviorSubject({});
    currentItem = this.itemObject.asObservable();

    private formValue = new BehaviorSubject(false);
    setNewValue = this.formValue.asObservable();

    constructor() { }

    getItem(item: Object) {
        this.itemObject.next(item)
    }

    setBookingFormValue(showBookForm: boolean) {
        this.formValue.next(showBookForm)
    }

}