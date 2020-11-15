import { createReducer, on } from '@ngrx/store';
import * as counterActions from './actions';
import { initialCounterState } from './state';

const _counterReducer = createReducer(initialCounterState,
    on(counterActions.increment, state => state + 1),
    on(counterActions.decrement, state => state - 1),
    on(counterActions.reset, state => state = 0),
  );

  export function counterReducer(state, action) {
    return _counterReducer(state, action);
  }
