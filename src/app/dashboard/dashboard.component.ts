import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DashboardService } from './dashboard.service';
import { AddTaxDialog } from './tax.component';
import { Router } from '@angular/router';

@Component({
  selector: 'appDashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  selectedMenu = 'dashboard';
  showCustomer = true;
  showCheckout = false;
  customerCount = 0;
  roomCount = 0;
  constructor(private router: Router, private dashboardService: DashboardService, public dialog: MatDialog) { }

  ngOnInit() {
    let customer = this.router.url.indexOf('customer');
    let rooms = this.router.url.indexOf('rooms');
    let bookRoom = this.router.url.indexOf('book-room');
    if (customer != -1) { this.selectedMenu = 'customer'; this.showCustomer = false; }
    if (rooms != -1) { this.selectedMenu = 'rooms'; this.showCustomer = false; }
    if (bookRoom != -1) { this.selectedMenu = 'book-room'; this.showCustomer = false; }
    this.totalCustomers();
  }

  activeMenu(menu) {
    if ((menu == 'tax' && this.selectedMenu == 'dashboard') || menu == 'dashboard') {
      this.totalCustomers();
      this.selectedMenu = menu;
      this.showCustomer = true;
    } else {
      this.selectedMenu = menu;
      this.showCustomer = false;
      this.showCheckout = false;
    }
  }

  openDialog() {
    this.dialog.open(AddTaxDialog, {
      data: {
      }
    });
  }

  receiveEvent($event) {
    this.showCheckout = $event;
    this.showCustomer = !this.showCustomer;
  }

  logoutUser() {
    this.dashboardService.logout()
      .subscribe(
        data => {
          if (data) {
            this.router.navigate(['login']);
          }
        },
        error => {
          console.log(error);
        });
  }

  totalCustomers() {
    this.dashboardService.totalCustomers()
      .subscribe(
        data => {
          if (data) {
            this.customerCount = data;
          } else {
            this.customerCount = 0;
          }
        },
        error => {
          console.log(error);
        });
  }

  totalRooms() {
    this.dashboardService.totalRooms()
      .subscribe(
        data => {
          if (data) {
            this.roomCount = data;
          } else {
            this.roomCount = 0;
          }
        },
        error => {
          console.log(error);
        });
  }
}