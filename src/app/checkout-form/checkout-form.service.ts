import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';
import { environment } from '../../environments/environment';

@Injectable()

export class getTaxService {

    constructor(private http: HttpClient) { }

    getTaxData() {
        return this.http.get(environment.BACKEND.URL.viewTax)
            .map(res => {
                return res;
            });
    }

    getRoomCustDetails(room_id: number, customer_id: number) {
        return this.http.get('environment.BACKEND.URL.getRoomCustDetails')
            .map(res => {
                return res;
            });
    }
}