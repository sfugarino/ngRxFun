import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as RootState } from '../root-state';
import { counterFeatureName } from './state';

export const selectCounterState = createFeatureSelector<RootState, number>(counterFeatureName);

export const selectFeatureCount = createSelector(
  selectCounterState,
  (state: number) => state
);
