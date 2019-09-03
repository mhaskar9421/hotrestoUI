import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!localStorage.getItem('Token')) {
            this.router.navigateByUrl('/login');
        } else {
            return true;
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!localStorage.getItem('Token')) {
            this.router.navigateByUrl('/login');
        } else {
            return true;
        }
    }
}