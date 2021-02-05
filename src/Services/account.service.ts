import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { emit } from 'process';
import { LoginResponse } from 'src/app/Modals/LoginResponse';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // url = 'https://doctorapp.sharingride.pk/';
  url = 'https://doctorapp.sharingride.pk/api/';
  constructor(private http: HttpClient) { }
  GetAdminUsers(token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });
    return this.http.post<Response>(this.url + 'account/admins', null, {headers});
  }
  DeleteAdmin(email) {
    return this.http.get<any>(this.url + 'account/delete/' + email);
  }
  AddNewUser(data) {
    return this.http.post<any>(this.url + 'account/register', data);
  }
  BlockUnblockAdmin(email) {
    return this.http.post<any>(this.url + 'account/BlockUnBlockAdmin', { Email: email });
  }
  Login(data) {
    return this.http.post<LoginResponse>(this.url + 'account/Login', data);
  }
}
export class Response {
  status: string;
  dataList: any;
  data: any;
  errors: any;
  message: string;
}
