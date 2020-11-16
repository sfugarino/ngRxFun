import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducer';
import { counterFeatureName } from './state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(counterFeatureName, counterReducer),
  ],
})
export class CounterStoreModule { }
