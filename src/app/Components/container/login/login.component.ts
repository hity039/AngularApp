import { CommonModule } from '@angular/common';
import { Component, OnInit , inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { Observable, Subject } from 'rxjs';
import { AuthResponse } from '../../../Models/AuthResponse';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../../Utility/loader/loader.component';
import { SnackbarComponent } from '../../../Utility/snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,LoaderComponent,SnackbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;
  formdata : any = {};
  isLoginMode : boolean = true;
  authObs : Observable<AuthResponse>;
  authService : AuthService = inject(AuthService);
  router : Router = inject(Router);
  isLoading: boolean = false;
  errorMessage: string | null = null;
  isSnackBarHidden : boolean = false;
  show = new Subject<boolean>();
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      email : new FormControl(null,[Validators.required,Validators.email]),
      password : new FormControl(null,Validators.required)
    })
  }

  onSwitchMode(){
    this.reactiveForm.reset();
    this.isLoginMode = !this.isLoginMode;
  }
  OnFormSubmitted(){
    console.log(this.reactiveForm);
    const Email = this.reactiveForm.value.email;
    const Password = this.reactiveForm.value.password;
    this.formdata = this.reactiveForm.value;
    
    // this.reactiveForm.reset({
    //  email : null,
    //  password : null
    // });
    if(this.isLoginMode){
       this.isLoading = true;
      this.authObs = this.authService.login(Email, Password);
    }else{
       this.isLoading = true;
      this.authObs = this.authService.signup(Email, Password);
    }

    this.authObs.subscribe({
      next : (res) =>{
        console.log("Response while subscribing : " + res);
        this.isLoading = false;
        if(res.email == "Email already registered !!" || res.email == "Email is not registered. Please Sign Up !!" || res.email == "Email or Password is not correct" ){
          this.isSnackBarHidden = false;
          //this.show.next(false);
          this.errorMessage = res.email;
        }
        else{
          this.router.navigate(['/']);
        }
      },
      error: (errMsg) => { 
        this.isLoading = false;
        this.errorMessage = errMsg.error;
       //this.hideSnackbar();
      }
    })
  }

}
