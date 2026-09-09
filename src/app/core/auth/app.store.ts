import {DOCUMENT, effect, inject, Injectable, signal} from '@angular/core';


type Theme = 'dark' | 'light';

@Injectable({providedIn: 'root'})
export class AppStore {
  constructor() {
    effect(() => this.applyTheme(this.theme()));
  }

  private readonly document = inject(DOCUMENT);
  readonly theme = signal<Theme>(this.loadTheme());

  private loadTheme(): Theme {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  }

  private applyTheme(theme: Theme): void {
    this.document.documentElement.dataset['theme'] = theme;
    localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    this.theme.update(theme => theme === 'dark' ? 'light' : 'dark');
  }
}
