import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    console.log('Interceptor Called');

    let authReq = request;
    if (request.url.includes('/credits')) {
      // Endpoint v3 → api_key
      authReq = request.clone({
        params: request.params.set('api_key', environment.tmdbApiKey),
      });
    } else {
      authReq = request.clone({
        headers: request.headers
          .set('Authorization', `Bearer ${environment.tmdbToken}`)
          .set('Content-Type', 'application/json'),
      });
    }
    return next.handle(authReq);
  }
}
// FILE SOLO DI TEST PER LA CREAZIONE DI UN INTERCEPTOR PER AUTENTICAZIONE
