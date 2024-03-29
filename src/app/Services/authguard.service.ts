import { Injectable , inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable({
    providedIn : 'root'
})
export class AuthGuard{
    authService : AuthService = inject(AuthService);
    router : Router = inject(Router);
    canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot) : boolean  | Promise<boolean> | Observable<boolean>  {
        if(this.authService.IsAuthenticated()){
            return true;
        }else{
            this.router.navigate(['/']);
            return false;
        }
    }
}