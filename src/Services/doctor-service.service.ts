import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Response, ShortResponse } from 'src/app/Interface/Response';
@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
  url = 'https://doctorapp.sharingride.pk/api/';

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  GetDoctors(token) {
    // make header
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });

    return this.http.post<Response>(this.url + 'doctor/GetDoctors', null, { headers });
  }
  ChangeStatus(value,id,token)
  {
   

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });
    return this.http.post<ShortResponse>(this.url+'doctor/ChangeStatus',{Status:value,DoctorId:id},{headers});
  }
  // tslint:disable-next-line: typedef
  GetDoctor(id) {
    return this.http.get<Response>(this.url + 'doctor/' + id);
  }
  // tslint:disable-next-line: typedef
  verifyDoctor(regCode,token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer '+token
    });
    return this.http.post<any>(this.url + 'doctor/Verify', regCode , { headers });
  }
}

