import { Injectable , inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable({
    providedIn : 'root'
})
export class AuthGuard {
    constructor(private authService :AuthService, private router : Router ){}
    //authService : AuthService = inject(AuthService);
   // router : Router = inject(Router);
    canActivate() : boolean  | Promise<boolean> | Observable<boolean>  {
        if(this.authService.IsAuthenticated()){
            return true;
        }else{
            this.router.navigate(['/']);
            return false;
        }
    }


    // The below code is the implementation of CanActivateFn according to angular 17 and this is not used in this project
    guradd : CanActivateFn = (route : ActivatedRouteSnapshot , state : RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean =>{
        return this.canActivate();
    }
}
