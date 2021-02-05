import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {
  url = 'https://doctorapp.sharingride.pk/api/Speciality1/';

  constructor(private http: HttpClient) { }

  GetAllSpecialities(token) {

    const headers = new HttpHeaders
      ({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      });

    return this.http.post(this.url + 'GetSpeciality', null, { headers });
  }
}
