import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { auth_apiURL } from '../Models/Config';
import { AuthResponse } from '../Models/AuthResponse';
import { BehaviorSubject, catchError ,tap ,throwError } from 'rxjs';
import { User } from '../Models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http : HttpClient = inject(HttpClient);
  user = new BehaviorSubject<User>(null);
  isLogged : boolean = false;
  router : Router = inject(Router);
  constructor() { }

  signup(email:string,password:string){
    const data = {email : email , password : password , returnSecureToken : true};
    return this.http.post<AuthResponse>(auth_apiURL + "SignUp",data).pipe(catchError(this.handleError),tap((res)=>{
      if(res.email == "Email already exists for the user"){
        this.handleError("Email already registered !!");
      }
      else{
        this.isLogged = true;
        this.handleCreateUser(res);
      }
    }));
  }

  login(email : string,password : string){
    const data = {email : email , password : password , returnSecureToken : true};
    return this.http.post<AuthResponse>(auth_apiURL + "LogIn",data).pipe(catchError(this.handleError),tap((res)=>{
      if(res.email == "Email is not registered. Please Sign Up !!" || res.email == "Email or Password is not correct"){
        this.handleError(res.email);
      }
      else{
        this.isLogged = true;
       this.handleCreateUser(res);
      }
    }));
  }


  handleCreateUser(res){
    const expiresInTs = new Date().getTime() + +res.expiresIn * 1000;
    const expiresIn = new Date(expiresInTs);
    const user = new User(res.email, res.secureToken, expiresIn);
    this.user.next(user);
    //this.autoLogout(res.expiresIn * 1000);

    localStorage.setItem('user', JSON.stringify(user));
  }

  handleError(err){
    return throwError(() => err);
  }
  IsAuthenticated(){
    return this.isLogged;
}

logOut(){
  this.user.next(null);
  localStorage.removeItem('user');  
  this.router.navigate(['/Login']);
}
}
