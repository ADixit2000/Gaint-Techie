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

      this.loggedUserName = user.email;
    }
  }

  onUserLogin(obj: any) {
    obj.email = obj.email.trim();
    obj.password = obj.password.trim();
    return this.http.get(
      Constant.API_Url +
        '/User/login?email=' +
        obj.email +
        '&password=' +
        obj.password
    );
  }
  OnUserRegister(registerObj: any) {
    registerObj.email = registerObj.email.trim();
    registerObj.password = registerObj.password.trim();
    return this.http.post(Constant.API_Url + '/User/Create', registerObj);
  }
}
