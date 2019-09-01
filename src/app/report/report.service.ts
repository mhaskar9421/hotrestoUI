import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReports(startDate: object, endDate: object) {
    return this.http.post('environment.BACKEND.URL.getReports', { startDate: startDate, endDate: endDate })
      .map(res => {
        return res;
      });
  }
  viewReports() {
    return this.http.get('environment.BACKEND.URL.viewReport')
      .map(res => {
        return res;
      });
  }
}
