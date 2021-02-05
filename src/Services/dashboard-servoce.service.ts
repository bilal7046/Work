import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/Interface/Response';
@Injectable({
  providedIn: 'root'
})
export class DashboardServoceService {
  url = 'https://doctorapp.sharingride.pk/api/';
  constructor(private client: HttpClient) { }
  GetDashBoardData() {
    return this.client.post<Response>(this.url + 'DashBoard/get', null);
  }
}

