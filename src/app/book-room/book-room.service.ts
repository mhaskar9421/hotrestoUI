import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';
import { environment } from '../../environments/environment';
@Injectable()
export class BookRoomService {
    constructor(private http: HttpClient) { }

    getAvaliableRooms(checkinDate: object, checkoutDate: object) {
        return this.http.post(environment.BACKEND.URL.getRoomsList, { checkinDate: checkinDate, checkoutDate: checkoutDate })
            .map(res => {
                return res;
            });
    }

}