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

    getRoomCustDetails(customer_id: number, room_id: number) {
        return this.http.post(environment.BACKEND.URL.getRoomCustomerDetails, { customer_id: customer_id, room_id: room_id })
            .map(res => {
                return res;
            });
    }
}