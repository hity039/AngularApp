import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { AuthInterceptorService } from './Services/auth-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
};
