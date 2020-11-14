import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { counterReducer, counterFeatureName } from './counter.reducer';
import { authReducer, AuthState, authFeatureName } from './auth.reducer';

export interface AppState {
  count: number;
  auth: AuthState;
}

export const selectCounterState = createFeatureSelector<AppState, number>(counterFeatureName);

export const selectFeatureCount = createSelector(
  selectCounterState,
  (state: number) => state
);

export const reducers: ActionReducerMap<AppState> = {
  count: counterReducer,
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
