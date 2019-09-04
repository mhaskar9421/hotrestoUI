import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';
import { environment } from '../../environments/environment';

@Injectable()

export class BookedCustomerService {

    constructor(private http: HttpClient) { }

    viewBookedCustomerList() {
        return this.http.get(environment.BACKEND.URL.viewBookedCustomers)
            .map(res => {
                return res;
            });
    }

}