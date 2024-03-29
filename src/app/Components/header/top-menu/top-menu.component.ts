import { CommonModule } from '@angular/common';
import { Component , OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { User } from '../../../Models/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent implements OnInit , OnDestroy{
  // topMenuComponents:string[] = ['Help','Exchange & Returns','Order Tracking','SignUp/Login'];
  authService : AuthService = inject(AuthService);
  isLoggedIn : boolean = false;
  private userSubject : Subscription;
  ngOnInit(): void {
    this.authService.user.subscribe((user : User) =>{
      this.isLoggedIn = user ? true : false;
    });
  }

  ngOnDestroy(): void {
    if(this.userSubject){
      this.userSubject.unsubscribe();
    }
  }

  logOut(){
    this.authService.logOut();
  }
}
