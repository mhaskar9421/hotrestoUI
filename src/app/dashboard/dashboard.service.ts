import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';


@Injectable()
export class DashboardService {

    constructor(private http: HttpClient) { }

    logout() {
        return this.http.get<any>(environment.BACKEND.URL.logout, {})
            .map(res => {
                return res;
            });
    }
    addTax(tax: string) {
        return this.http.post<any>('environment.BACKEND.URL.addtax', { tax: tax })
            .map(res => {
                return res;
            });
    }
}