import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  url = 'https://doctorapp.sharingride.pk/api/';
  constructor(private http: HttpClient) { }
  GetPatient(token) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });

    return this.http.post<Response>(this.url + 'patient/GetPatients', null, { headers });
  }
}
