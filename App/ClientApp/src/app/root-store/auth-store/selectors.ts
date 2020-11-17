import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as RootState } from '../root-state';
import { authFeatureName, AuthState } from './state';

export const selectAuthState = createFeatureSelector<RootState, AuthState>(authFeatureName);

export const selectFeatureAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state,
);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: AuthState) => state.isLoggedIn,
);
