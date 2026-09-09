import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';

import { Login } from './login';
import { AuthService } from '../../../core/auth/auth.service';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authService = jasmine.createSpyObj('AuthService', ['login']);

    router = jasmine.createSpyObj('Router', [
      'navigateByUrl'
    ]);

    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [
        {
          provide: AuthService,
          useValue: authService
        },
        {
          provide: Router,
          useValue: router
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({})
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize credentials', () => {
    expect(component.credentials()).toEqual({
      email: '',
      password: ''
    });
  });

  it('should not submit invalid form', () => {
    component.submit();

    expect(authService.login).not.toHaveBeenCalled();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  it('should login successfully', () => {
    authService.login.and.returnValue(true);

    component.credentials.set({
      email: 'test@test.com',
      password: '12345'
    });

    component.submit();

    expect(authService.login).toHaveBeenCalledOnceWith(
      'test@test.com',
      '12345'
    );

    expect(router.navigateByUrl)
      .toHaveBeenCalledOnceWith('/books');
  });

  it('should show error for invalid credentials', () => {
    authService.login.and.returnValue(false);

    component.credentials.set({
      email: 'test@test.com',
      password: '12345'
    });

    component.submit();

    expect(component.loginError())
      .toBe('Incorrect email or password.');

    expect(router.navigateByUrl)
      .not.toHaveBeenCalled();
  });

  it('should clear previous error before submit', () => {
    component.loginError.set('Invalid credentials');

    authService.login.and.returnValue(false);

    component.credentials.set({
      email: 'test@test.com',
      password: '12345'
    });

    component.submit();

    expect(component.loginError())
      .toBe('Incorrect email or password.');
  });

});
