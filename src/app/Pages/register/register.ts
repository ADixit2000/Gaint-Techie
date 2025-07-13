import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '../../services/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerObj: any = {
    fullName: '',
    email: '',
    collegeName: '',
    password: '',
  };

  userService = inject(User);
  http = inject(HttpClient);

  // autoIdGenerator() {
  //   this.registerObj.id++;
  //   return this.registerObj.id;
  // }

  onRegister() {
    this.userService.OnUserRegister(this.registerObj).subscribe((res: any) => {
      alert('User Successfully Registered');
    });
  }
}
