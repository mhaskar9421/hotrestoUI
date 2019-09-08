import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';
import { environment } from '../../environments/environment';
@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) {
    }

    addCustomer(customername: string, custid: string, idnumber: string, phonenumber: number, address: string, file: File) {
        return this.http.post(environment.BACKEND.URL.addCustomer, { customername: customername, custid: custid, idnumber: idnumber, phonenumber: phonenumber, address: address, file: file })
            .map(res => {
                return res;
            });
    }

    viewCustomerDetails() {
        return this.http.get(environment.BACKEND.URL.viewCustomer)
            .map(res => {
                return res;
            });
    }

    deleteCustomer(customer_id: string) {
        return this.http.get(environment.BACKEND.URL.deleteCustomer + customer_id)
            .map(res => {
                return res;
            });
    }
}