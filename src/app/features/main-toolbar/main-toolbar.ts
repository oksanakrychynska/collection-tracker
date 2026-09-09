import {Component, inject, output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {AppStore} from '../../core/auth/app.store';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-main-toolbar',
  imports: [
    MatButton,
    MatToolbar,
    RouterLink
  ],
  templateUrl: './main-toolbar.html',
  styleUrl: './main-toolbar.scss',
})
export class MainToolbar {
  protected readonly store = inject(AppStore);
  logoutPerformed = output();


  logout() {
    this.logoutPerformed.emit();
  }
}
