import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { ApiModule, Configuration } from '@avocado/backend-api-angular';

// TODO
const apiConfig = new Configuration({
  basePath: 'http://localhost:4200',
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    importProvidersFrom(ApiModule.forRoot(() => apiConfig)),
  ],
};
