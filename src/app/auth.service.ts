import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { Injectable, setTestabilityGetter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import * as moment from "moment";

import { environment } from '../environments/environment';

import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
    private loggedIn = false;

    constructor(private router: Router,
        private httpClient: HttpClient) { }

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                resolve(this.getToken() ? true : false)
            }
        );
        return promise;
    }

    logout() {
        this.clearSession();
        this.loggedIn = false;
        this.router.navigate([environment.FRONTEND.BASIC_ROUTES.LOGIN_ROUTE]);
    }

    setSession(token: any) {
        // expires at - seconds . local storage
        // const expiresAt = moment().add(authResult.expiresIn,'second');
        // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
        sessionStorage.setItem(environment.AUTHENTICATION.TOKENNAME, token);
    }

    getToken() {
        let temp = sessionStorage.getItem(environment.AUTHENTICATION.TOKENNAME);
        return temp ? temp : '';
    }

    clearSession() {
        sessionStorage.removeItem(environment.AUTHENTICATION.TOKENNAME);
    }


}