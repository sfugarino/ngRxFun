import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private authService: Auth0Service) {}

  get isLoggedIn(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }

  get token(): Observable<string> {
    return this.authService.getAccessTokenSilently();
  }

  get userData(): Observable<any> {
    return this.authService.user$;
  }

  public checkAuth(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }

  public doLogin(): Observable<void> {
    return this.authService.loginWithRedirect();
  }

  public signOut(): void {
    this.authService.logout();
  }
}
