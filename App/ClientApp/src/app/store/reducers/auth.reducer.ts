import { createReducer, on, Action } from '@ngrx/store';
import * as authActions from '../actions/auth/auth.actions';

export const authFeatureName = 'auth';

export interface AuthState {
    profile: any;
    isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
    profile: null,
    isLoggedIn: false
}

const _counterReducer = createReducer(initialAuthState,
    on(authActions.checkAuth, state => state),
    on(authActions.checkAuthComplete, state => state),
    on(authActions.login, state => state),
    on(authActions.loginComplete, state => state),
    on(authActions.logout, state => state),
    on(authActions.logoutComplete, state => state)
);

export function authReducer(state, action) {
    return _counterReducer(state, action);
}