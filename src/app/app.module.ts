// angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { StatusService } from './status.service';
import { DashboardService } from './dashboard/dashboard.service';
import { LoginService } from './login/login.service';
import { CustomerService } from './customer/customer.service';

// interceptors
import { RequestsInterceptor } from './httpRequestsInterceptor.service';
import { ErrorInterceptor } from './httpErrorInterceptor.service';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// modules
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { MaterialModule } from './material.module'
import { NGPrimeModule } from './primeng.module';
import { ToastrModule } from 'ngx-toastr';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CalendarModule } from 'primeng/calendar';

import { environment } from '../environments/environment'; // as per your path
import { notificationMessages } from '../notificationMessages';
import { AddroomComponent } from './rooms/rooms.component';
import { CustomerInfoComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorPageComponent,
    DashboardComponent,
    NavComponent,
    SidebarComponent,
    AddroomComponent,
    CustomerInfoComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ChartsModule,
    NGPrimeModule,
    CalendarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot()
  ],
  providers: [
    notificationMessages,
    {
      provide: LOCALE_ID,
      useValue: 'en-US'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsInterceptor,
      multi: true
    },
    DashboardService,
    AuthService,
    StatusService,
    AuthGuard,
    LoginService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}