import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterFeatureName } from './state';
import { counterReducer } from './reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(counterFeatureName, counterReducer),
  ]
})
export class CounterStoreModule { }
