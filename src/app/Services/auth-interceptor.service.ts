import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";
import { exhaustMap , take } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    authService : AuthService = inject(AuthService);
    intercept(req:HttpRequest<any>, next:HttpHandler){
        return this.authService.user.pipe(
            take(1), exhaustMap(user=>{
                if(!user){
                    return next.handle(req);
                }
                // const modifiedReq = req.clone({
                //     params  : new HttpParams().set('auth',user.token)
                // });
                const modifiedReq = req.clone({
                   setHeaders :{
                    Authorization : `Bearer ${user.token}`
                   }
                });
                return next.handle(modifiedReq);
            })
        )
    }
}

  // const token = localStorage.getItem('token');
        // const authRequest = req.clone({
        //     headers : req.headers.set('Authorization', 'Bearer ' + token)
        // });
        // return next.handle(authRequest);