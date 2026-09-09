import {computed, inject, Injectable, signal} from '@angular/core';
import {Router} from '@angular/router';

const SESSION_KEY = 'authenticated';
const EMAIL = 'test@test.com';
const PASSWORD = '12345';

@Injectable({providedIn: 'root'})
export class AuthService {
  authenticated = signal(localStorage.getItem(SESSION_KEY) === 'true');
  readonly isAuthenticated = computed(() => this.authenticated());
  private readonly router = inject(Router);
  login(email: string, password: string): boolean {

    // jwt manipulation goes here
    const credentialsMatch = email === EMAIL && password === PASSWORD;

    if (credentialsMatch) {
      localStorage.setItem(SESSION_KEY, 'true'); // jwt token goes here
      this.authenticated.set(true);
    }

    return credentialsMatch;
  }

  logout() {
    localStorage.removeItem(SESSION_KEY);
    this.authenticated.set(false);
    this.router.navigateByUrl('/login');
  }
}
