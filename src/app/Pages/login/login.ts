import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../services/user';
import { Router, RouterLink } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: any = {
    email: '',
    password: '',
  };

  userService = inject(User);
  router = inject(Router);

  onLogin() {
    debugger;
    // const value = this.loginObj.formValue;
    this.userService.onUserLogin(this.loginObj).subscribe({
      next: (res: any) => {
        console.log(res);
        localStorage.setItem(
          'user',
          JSON.stringify({ id: res.id, name: res.fullName, email: res.email })
        );
        this.userService.loggedUserId = res.id;
        if (this.userService.loggedUserId == '1') {
          this.router.navigateByUrl('/competition');
        } else {
          this.router.navigateByUrl('/home');
        }
      },
      error: () => {
        alert('login failed');
      },
    });
  }
}
