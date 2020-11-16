import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './reducer';
import { authFeatureName } from './state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeatureName, authReducer),
  ]
})
export class AuthStoreModule { }
