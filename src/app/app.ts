import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { User } from './services/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'clg-project';

  userService = inject(User);
  router = inject(Router);

  onLogOff() {
    localStorage.removeItem('user');
    this.userService.loggedUserId = '';
    this.router.navigateByUrl('/home');
  }
}
