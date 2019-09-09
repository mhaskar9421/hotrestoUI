import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';
import { environment } from '../../environments/environment';
@Injectable()
export class BookRoomFormService {
    constructor(private http: HttpClient) { }

    bookRoom(bookroomform: Object) {
        return this.http.post(environment.BACKEND.URL.bookRoom, { bookroomform: bookroomform })
            .map(res => {
                return res;
            });
    }

    updateBookingInfo(updatedform: Object, updateFormData: Object) {
        return this.http.post(environment.BACKEND.URL.editBooking, { updatedform: updatedform, updateFormData: updateFormData })
            .map(res => {
                return res;
            });
    }



}