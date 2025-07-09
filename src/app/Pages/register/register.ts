import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerObj: any = {
    id: 0,
    fullName: '',
    email: '',
    collegeName: '',
    password: '',
    role: 'Student',
  };

  http = inject(HttpClient);

  autoIdGenerator() {
    this.registerObj.id++;
    return this.registerObj.id;
  }

  onRegister() {
    if (this.registerObj != null) {
      this.autoIdGenerator();
    }
    this.http
      .post('http://localhost:3000/studentRegistration', this.registerObj)
      .subscribe((res: any) => {});
  }
}
