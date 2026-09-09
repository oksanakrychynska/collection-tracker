import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {FormField, form, email, minLength, pattern, required} from '@angular/forms/signals';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../core/auth/auth.service';

interface LoginCredentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly credentials = signal<LoginCredentials>({email: '', password: ''});
  readonly loginForm = form(this.credentials, (schema) => {
    required(schema.email, {message: 'Email is required'});
    email(schema.email, {message: 'Enter a valid email address'});
    required(schema.password, {message: 'Password is required'});
    minLength(schema.password, 5, {message: 'Password must be at least 5 characters'});
    pattern(schema.password, /^[A-Za-z0-9]+$/, {
      message: 'Password may contain Latin letters and numbers only',
    });
  });
  readonly loginError = signal('');

  submit() {
    this.loginForm.email().markAsTouched();
    this.loginForm.password().markAsTouched();
    this.loginError.set('');

    if (this.loginForm().invalid()) {
      return;
    }

    const {email: emailValue, password: passwordValue} = this.credentials();
    if (!this.auth.login(emailValue, passwordValue)) {
      this.loginError.set('Incorrect email or password');
      return;
    }

    const redirectUrl = this.route.snapshot.queryParamMap.get('redirectUrl');
    this.router.navigateByUrl(redirectUrl?.startsWith('/') ? redirectUrl : '/books');
  }
}
