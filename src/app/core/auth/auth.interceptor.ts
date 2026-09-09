import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from './auth.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const auth = inject(AuthService);

  return next(auth.isAuthenticated()
    ? request.clone({setHeaders: {Authorization: 'Bearer token goes here'}})
    : request
  );
};
