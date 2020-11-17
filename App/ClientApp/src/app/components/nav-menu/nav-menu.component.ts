import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthState } from 'src/app/root-store/auth-store/state';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<{ auth: AuthState }>) {
    this.isLoggedIn$ = store.pipe(select('auth'), select(a => a.isLoggedIn));
  }

  collapse(): void {
    this.isExpanded = false;
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  login(): void {

  }

  logout(): void {

  }
}
