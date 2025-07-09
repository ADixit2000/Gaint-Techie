import { RouterModule, Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Register } from './Pages/register/register';
import { Login } from './Pages/login/login';
import { Dashboard } from './Pages/dashboard/dashboard';
import { Projects } from './Pages/projects/projects';
import { SubmitProject } from './Pages/submit-project/submit-project';
import { Competition } from './Pages/competition/competition';
import { About } from './Pages/about/about';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'all-Projects',
    component: Projects,
  },
  {
    path: 'submitProject/:id',
    component: SubmitProject,
  },
  {
    path: 'competition',
    component: Competition,
  },
  {
    path: 'about',
    component: About,
  },
];
