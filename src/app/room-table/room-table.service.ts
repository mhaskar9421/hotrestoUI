import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class RoomTableService {

    constructor(private http: HttpClient) {
    }

    viewRoom() {
        return this.http.get(environment.BACKEND.URL.viewRoom)
            .map(res => {
                return res;
            });
    }

    getAvaliableRooms() {
        return this.http.get(environment.BACKEND.URL.viewRoom)
            .map(res => {
                return res;
            });
    }

    deleteRoom(room_id: number) {
        return this.http.get(environment.BACKEND.URL.deleteRoom + room_id)
            .map(res => {
                return res;
            })
    }

}