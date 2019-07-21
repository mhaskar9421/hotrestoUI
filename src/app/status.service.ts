import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {

  private statuspoller;
  public statusChanged = new Subject<any>();

  constructor(private httpClient: HttpClient) {
    // this.startPolling();
  }

  stopPolling() {
    clearTimeout(this.statuspoller);
  }

}
