import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
  } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private secureRoutes = ['https://localhost:5001/api'];

    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (!this.secureRoutes.find((x) => request.url.startsWith(x))) {
        return next.handle(request);
      }

      const token = this.authService.token;

      if (!token) {
        return next.handle(request);
      }

      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });

      return next.handle(request);
    }
  }
