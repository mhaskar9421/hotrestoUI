import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule, Router } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddroomComponent } from "src/app/rooms/rooms.component";
import { CustomerInfoComponent } from "src/app/customer/customer.component";
import { BookRoomComponent } from './book-room/book-room.component';
import { RoomTableComponent } from './room-table/room-table.component'
import { BookRoomFormComponent } from './book-room-form/book-room-form.component';

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
        component: DashboardComponent,
        children: [
            { path: 'rooms', component: AddroomComponent },
            { path: 'customer', component: CustomerInfoComponent },
            { path: 'book-room', component: BookRoomComponent }
        ]
    },
    {
        path: 'room-table',
        component: RoomTableComponent
    }


];
@NgModule({
    // hashtag -> use useHash:true
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
