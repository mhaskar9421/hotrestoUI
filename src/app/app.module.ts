// angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';

// services
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { StatusService } from './status.service';
import { DashboardService } from './dashboard/dashboard.service';
import { LoginService } from './login/login.service';
import { RoomService } from './rooms/room.service';
import { CustomerService } from './customer/customer.service';
import { BookRoomService } from './book-room-form/book-room-form.service';

// interceptors
import { BasicAuthInterceptor } from './httpRequestsInterceptor.service';
import { ErrorInterceptor } from './httpErrorInterceptor.service';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTaxDialog } from './dashboard/tax.component';
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
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { RoomTableComponent } from './room-table/room-table.component';
import { BookRoomFormComponent } from './book-room-form/book-room-form.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
// import { TaxComponent } from './tax/tax.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorPageComponent,
    DashboardComponent,
    AddTaxDialog,
    NavComponent,
    SidebarComponent,
    AddroomComponent,
    CustomerInfoComponent,
    CustomerTableComponent,
    BookRoomComponent,
    RoomTableComponent,
    BookRoomFormComponent,
    CheckoutFormComponent
    // TaxComponent
  ],
  entryComponents: [DashboardComponent, AddTaxDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ChartsModule,
    NGPrimeModule,
    CalendarModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
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
      useClass: BasicAuthInterceptor,
      multi: true
    },
    DashboardService,
    AuthService,
    StatusService,
    AuthGuard,
    LoginService,
    RoomService,
    CustomerService,
    BookRoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}