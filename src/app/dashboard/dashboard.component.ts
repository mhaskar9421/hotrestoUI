import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chart from 'chart.js'
import { DashboardService } from './dashboard.service';
import { interval, Observable } from 'rxjs';
import { timer } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private dashboardService: DashboardService) { }

  ngOnInit() { }

  logoutUser() {
    this.dashboardService.logout()
      .subscribe(
        data => {
          console.log(data);
          if (data) {
            this.router.navigate(['login']);
          }
        },
        error => {
          console.log(error);
        });
  }
}
