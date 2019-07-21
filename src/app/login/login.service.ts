import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post(environment.BACKEND.URL.loginUser, { username: username, password: password })
            .map(res => {
                return res;
            });
    }

    resetPassword(email: string) {
        return this.http.post<any>('environment.BACKEND.URL.resetPwd', { email: email })
            .map(res => {
                return res;
            });
    }
}