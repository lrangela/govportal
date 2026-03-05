import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { API_BASE_URL, apiBaseUrlInterceptor } from '@gov/core/http';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
    provideRouter(appRoutes),
    { provide: API_BASE_URL, useValue: '' },
    provideHttpClient(withInterceptors([apiBaseUrlInterceptor])),
  ],
};
