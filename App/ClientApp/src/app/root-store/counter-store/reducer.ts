import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import * as counterActions from './actions';
import { initialCounterState } from './state';

const cntReducer: ActionReducer<number, Action> = createReducer(initialCounterState,
    on(counterActions.increment, (state) => state + 1),
    on(counterActions.decrement, (state) => state - 1),
    on(counterActions.reset, (state) => state = 0),
  );

export const counterReducer = (state: number, action: Action): number => cntReducer(state, action);
