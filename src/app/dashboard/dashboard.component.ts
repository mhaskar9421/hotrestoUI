import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';

export interface DialogData {
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedMenu = 'dashboard';
  showCustomer = true;
  constructor(private router: Router, private dashboardService: DashboardService, public dialog: MatDialog) { }

  ngOnInit() {

  }

  activeMenu(menu) {
    this.selectedMenu = menu;
    this.showCustomer = false;
    if (menu === 'dashboard') {
      this.showCustomer = true;
    }
  }

  openDialog() {
    this.dialog.open(AddTaxDialog, {
      data: {
      }
    });
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
}


@Component({
  selector: 'addtax',
  templateUrl: 'addTax.html',
})
export class AddTaxDialog {
  constructor( @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  IsmodelShow = false;
  addTax() {
    console.log("Add tax");
  }
  close() {
    this.IsmodelShow = true;// set false while you need open your model popup
    // do your more code
  }


}