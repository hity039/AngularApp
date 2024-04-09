import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
import { AuthInterceptorService } from './Services/auth-interceptor.service';
import { AuthService } from './Services/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptorService, multi : true},
    provideHttpClient(withInterceptorsFromDi())
  ]
};
