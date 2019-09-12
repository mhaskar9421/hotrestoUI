import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddroomComponent } from "src/app/rooms/rooms.component";
import { CustomerInfoComponent } from "src/app/customer/customer.component";
import { BookRoomComponent } from './book-room/book-room.component';
import { RoomTableComponent } from './room-table/room-table.component'
import { ReportComponent } from './report/report.component';
import { BookRoomFormComponent } from './book-room-form/book-room-form.component';
import { BookedCustomerListComponent } from './booked-customer-list/booked-customer-list.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: "/login",
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
        children: [
            { path: 'rooms', component: AddroomComponent, canActivateChild: [AuthGuard] },
            { path: 'customer', component: CustomerInfoComponent, canActivateChild: [AuthGuard] },
            { path: 'book-room', component: BookRoomComponent, canActivateChild: [AuthGuard] },
            { path: 'report', component: ReportComponent, canActivateChild: [AuthGuard] },
            { path: 'book-room-form', component: BookRoomFormComponent, canActivateChild: [AuthGuard] },
            { path: 'booked-customer-list', component: BookedCustomerListComponent, canActivateChild: [AuthGuard] },
            { path: 'checkout-form', component: CheckoutFormComponent, canActivateChild: [AuthGuard] }
        ],
    },
    {
        path: 'room-table',
        component: RoomTableComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
