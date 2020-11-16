import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../root-store/counter-store/actions';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  public incrementCounter(): void {
    this.store.dispatch(increment());
  }

  public decrementCounter(): void {
    this.store.dispatch(decrement());
  }

  public resetCounter(): void {
    this.store.dispatch(reset());
  }
}
