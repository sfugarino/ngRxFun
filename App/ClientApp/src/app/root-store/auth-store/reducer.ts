import { createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/app/store/reducers/auth.reducer';
import * as authActions from './actions';

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