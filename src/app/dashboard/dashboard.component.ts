import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedMenu = 'dashboard';
  constructor(private router: Router, private dashboardService: DashboardService, public dialog: MatDialog) { }

  ngOnInit() { }

  activeMenu(menu) {
    this.selectedMenu = menu;
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
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
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}