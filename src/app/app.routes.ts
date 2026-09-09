import { Routes } from '@angular/router';
import {authGuard} from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'books',
    canActivate: [authGuard],
    loadComponent: () => import('./features/books/ui/books/books').then(m => m.Books),
  },
  {
    path: 'trainings',
    canActivate: [authGuard],
    loadComponent: () => import('./features/trainings/trainings').then(m => m.Trainings),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.Login),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books',
  },
];
