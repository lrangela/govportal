import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiBaseUrlInterceptor } from '@gov/core/http';
import { CitizensFacade, ApplicationsFacade, PermitsFacade } from '@gov/data-access/legacy';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([apiBaseUrlInterceptor])),
    CitizensFacade,
    ApplicationsFacade,
    PermitsFacade,
  ],
};
