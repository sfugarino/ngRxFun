import { Action, createReducer, on } from '@ngrx/store';
import * as authActions from './actions';
import { AuthState } from './state';

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  profile: null,
};

const authReducerInternal = createReducer(
  initialAuthState,

  on(authActions.loginComplete, (state, { profile, isLoggedIn }) => {
    return {
      ...state,
      profile,
      isLoggedIn,
    };
  }),
  on(authActions.logout, (state, {}) => {
    return {
      ...state,
      profile: null,
      isLoggedIn: false,
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return authReducerInternal(state, action);
}
