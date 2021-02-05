import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/Interface/Response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  url = 'https://doctorapp.sharingride.pk/api/';
  constructor(private http: HttpClient) { }
  Save(token, data) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Autorization: 'Bearer ' + token

    });

    return this.http.post<Response>(this.url + 'Category', data, { headers });
  }
  GetCategories(token)
  {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Autorization: 'Bearer ' + token

    });

    return this.http.post<Response>(this.url + 'Category/GetCategories', { headers });
  }
}
