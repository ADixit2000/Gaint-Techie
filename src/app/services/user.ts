import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class User {
  loggedUserId: string = '';
  loggedUserName: string = '';

  constructor(private http: HttpClient) {
    const loggedData = localStorage.getItem('user');
    if (loggedData != null) {
      const user = JSON.parse(loggedData);

      this.loggedUserId = user.id;

      this.loggedUserName = user.name;
    }
  }

  onUserLogin(obj: any) {
    obj.email = obj.email.trim();
    obj.password = obj.password.trim();
    return this.http.get(
      Constant.API_Url +
        '/studentRegistration?email=' +
        obj.email +
        '&password=' +
        obj.password
    );
  }
}
