
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AuthStoreModule } from './auth-store/auth-store.module';
import { CounterStoreModule } from './counter-store/counter-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CounterStoreModule,
    AuthStoreModule,
    StoreModule.forRoot({}),
  ],
})

export class RootStoreModule { }
