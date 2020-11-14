import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter/counter.actions';

export const counterFeatureName = 'count';

export const initialCounterState = 0;

const _counterReducer = createReducer(initialCounterState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => state = 0),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
