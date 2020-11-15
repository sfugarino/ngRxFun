import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authFeatureName } from './state';
import { authReducer } from './reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeatureName, authReducer),
  ]
})
export class AuthStoreModule { }
