import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule, Router } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddroomComponent } from "src/app/addroom/addroom.component";

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
            { path: 'addroom', component: AddroomComponent },
            // { path: 'registration', component: RegistrationComponent },
            // { path: 'visitors', component: VisitorsComponent },
            // { path: 'myprofile', component: MyprofileComponent },
            // { path: 'noticeboard', component: NoticeboardComponent },
        ]
    }
];
//     {
//         path: 'home',
//         redirectTo: '/home/dashboard',
//         pathMatch: 'full'
//     },
//     {
//         path: 'home',
//         canActivate: [AuthGuard],
//         component: HomeComponent,
//         canActivateChild: [AuthGuard],
//         children: [
//             {
//                 path: 'dashboard',
//                 component: DashboardComponent
//                 // resolve: { server: ServerResolver }
//             },
//             {
//                 path: 'users',
//                 children: [
//                     {
//                         path: '',
//                         redirectTo: 'list',
//                         pathMatch: 'full'
//                     },
//                     {
//                         path: 'list',
//                         component: UsersComponent
//                     },
//                     {
//                         path: ':id',
//                         component: UserDetailComponent
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         path: 'login',
//         component: LoginComponent
//         // resolve: { server: ServerResolver }
//     },
//     {
//         path: 'not-found',
//         component: ErrorPageComponent,
//         data: { message: 'Error : Page not Found!' }
//     },
//     //important: Default must be at the routes end

{
    // path: '**',
    //     redirectTo: '/login'
}
// ];
@NgModule({

    // hashtag -> use useHash:true
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
