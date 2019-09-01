import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  startDate = Object;
  endDate = Object;
  report: {};
  loading: boolean;
  constructor(private router: Router, private reportService: ReportService) { }

  ngOnInit() {
    this.viewReports();
  }

  viewReports() {
    this.loading = true;
    this.reportService.viewReports()
      .subscribe(
      data => {
        if (data) {
          this.loading = false;
          this.report = data;
        } else {
          this.loading = false;
          this.report = null;
        }
      },
      error => {
        console.log(error);
        this.loading = false;
      });
  }
  searchReports() {
    console.log(this.startDate);
    console.log(this.endDate);
    // this.reportService.getReports(this.startDate, this.endDate)
    //   .subscribe(
    //     data => {
    //       if (data) {
    //         console.log(data)
    //       }
    //     },
    //     error => {
    //       console.log(error);
    //       this.loading = false;
    //     });
  }
}
