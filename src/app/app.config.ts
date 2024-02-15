import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState,provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { LoginReducer } from './context/reducers/login.reducer';
import { provideEffects } from '@ngrx/effects';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideHttpClient(), provideStore(), provideState({ name: "login", reducer: LoginReducer }), provideStoreDevtools({ maxAge: 25 }), provideEffects()]
};
