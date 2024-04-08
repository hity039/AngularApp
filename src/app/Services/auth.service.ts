import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthResponse } from '../Models/AuthResponse';
import { BehaviorSubject, catchError ,tap ,throwError } from 'rxjs';
import { User } from '../Models/User';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http : HttpClient = inject(HttpClient);
  user = new BehaviorSubject<User>(null);
  isLogged : boolean = false;
  router : Router = inject(Router);
  autoLogOutTimer : any;
  constructor() { }

  signup(email:string,password:string){
    const data = {email : email , password : password , returnSecureToken : true};
    return this.http.post<AuthResponse>(environment.auth_apiURL + "SignUp",data).pipe(catchError(this.handleError),tap((res)=>{
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
    return this.http.post<AuthResponse>(environment.auth_apiURL + "LogIn",data).pipe(catchError(this.handleError),tap((res)=>{
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
     const expireDate = new Date(this.formatDate(res.expiresIn));
     const currenDate = new Date();
     const expiresIn = Math.floor((expireDate.getTime() - currenDate.getTime()));
    //  const expiresInTs = new Date().getTime() + res.expiresIn * 1000;
    //  const expiresIn = new Date(expiresInTs);
    // const user = new User(res.email, res.secureToken, expiresIn);
    const user = new User(res.email, res.secureToken, res.expiresIn);


    this.user.next(user);
    this.autoLogout(expiresIn);

    localStorage.setItem('user', JSON.stringify(user));
  }

  autoLogin(){
    // AutoLogin method is added to prevent logout while refresh the tab and we call the autologin function in the app component.
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user){
      return;
    }
    if(user._token){
      this.user.next(user);
      const expireDate = this.formatDate(user._expiresIn);
      const timerValue  = new Date(expireDate).getTime() - new Date().getTime();
      this.autoLogout(timerValue);
    }
  }

  autoLogout(expirationDuration : number){
    this.autoLogOutTimer = setTimeout(()=>{
      this.logOut();
    },expirationDuration);
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

  // We have to clear the auto logout timer as well.
  if(this.autoLogOutTimer){
    clearTimeout(this.autoLogOutTimer);
  }
  this.autoLogOutTimer = null;
}

formatDate(dateString){
  // Input date string in the format dd/MM/yyyy hh:mm:ss
//var dateString = "03/04/2024 13:45:30";

// Split the date string into its components
var parts = dateString.split(" ");
var datePart = parts[0];
var timePart = parts[1];

// Split the date part into day, month, and year
var dateParts = datePart.split("-");
var day = dateParts[0];
var month = dateParts[1];
var year = dateParts[2];

// Construct a new date string in the desired format MM/dd/yyyy hh:mm:ss
var newDateString = month + "/" + day + "/" + year + " " + timePart;

//console.log(newDateString);
return newDateString;

}
}
