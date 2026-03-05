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
    provideZonelessChangeDetection(), // DX: Consistencia con el resto del monorepo
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),

    // Configuración para el consumo de la API mock
    { provide: API_BASE_URL, useValue: '' },
    provideHttpClient(withInterceptors([apiBaseUrlInterceptor])),
  ],
};