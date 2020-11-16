import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as RootState } from '../root-state';
import { authFeatureName } from './state';

export const selectCounterState = createFeatureSelector<RootState, number>(authFeatureName);

export const selectFeatureCount = createSelector(
  selectCounterState,
  (state: number) => state,
);
