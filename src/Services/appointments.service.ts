import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  url = 'https://doctorapp.sharingride.pk/api/';
  constructor(private http: HttpClient) { }
  getAppointments(token) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });
    return this.http.post<Response>(this.url + 'Appointments/GetAppointments', null, { headers });
  }
}
export class Response {
  status: string;
  dataList: any;
  data: any;
  errors: any;
  message: string;
}
