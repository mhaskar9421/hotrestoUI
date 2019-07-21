import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';


@Injectable()
export class DashboardService {

    constructor(private http: HttpClient) { }

    logout() {
        return this.http.post<any>(environment.BACKEND.URL.logout, {})
            .map(res => {
                return res;
            });
    }

}