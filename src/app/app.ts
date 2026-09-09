import {Component, ChangeDetectionStrategy, Signal, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainToolbar} from './features/main-toolbar/main-toolbar';

import {AuthService} from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainToolbar],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.scss'
})
export class App {
  private auth = inject(AuthService);
  readonly isAuthenticated: Signal<boolean> = this.auth.authenticated;

  logout() {
    this.auth.logout();
  }

  protected isLoggedIn() {

  }
}
