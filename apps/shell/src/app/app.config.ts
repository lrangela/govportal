import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { API_BASE_URL } from '@gov/core/http';
import { apiBaseUrlInterceptor } from '@gov/core/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // Zoneless (sin ZoneJS). Luego ajustamos polyfills/test si aplica.
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),

    // HttpClient moderno (interceptors funcionales los agregamos en el PASO 4)
    { provide: API_BASE_URL, useValue: '' },
    provideHttpClient(withInterceptors([apiBaseUrlInterceptor])),
  ],
};
