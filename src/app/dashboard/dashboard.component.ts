import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedMenu = 'dashboard';
  constructor(private router: Router, private dashboardService: DashboardService) { }

  ngOnInit() { }

  activeMenu(menu) {
    this.selectedMenu = menu;
  }

  logoutUser() {
    this.dashboardService.logout()
      .subscribe(
        data => {
          console.log(data);
          if (data) {
            //this.router.navigate(['login']);
          }
        },
        error => {
          console.log(error);
        });
  }
}
