import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class RoomService {

    constructor(private http: HttpClient) {
    }

    addRoom(roomname: string, roomnumber: string, noofbeds: string, image: File) {
        return this.http.post(environment.BACKEND.URL.addRoom, { roomname: roomname, roomnumber: roomnumber, noofbeds: noofbeds })
            .map(res => {
                return res;
            });
    }

    viewRoom() {
        return this.http.get(environment.BACKEND.URL.viewRoom)
            .map(res => {
                return res;
            });
    }

    deleteRoom(roomId: number) {
        return this.http.get('environment.BACKEND.URL.deleteRoom/' + roomId)
            .map(res => {
                return res;
            })
    }

}