import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterStoreModule } from './counter-store/counter-store.module';
import { AuthStoreModule } from './auth-store/auth-store.module';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CounterStoreModule,
    AuthStoreModule,
    StoreModule.forRoot({}),
  ]
})
export class RootStoreModule { }
