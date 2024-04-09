import { Routes } from '@angular/router';
import { LoginComponent } from './Components/container/login/login.component';
import { NotfoundComponent } from './Components/container/notfound/notfound.component';
import { MainComponentComponent } from './Components/container/main-component/main-component.component';
import { AboutComponent } from './Components/container/about/about.component';
import { AuthService } from './Services/auth.service';
import { AuthGuard } from './Services/authguard.service';
import { SignalsComponent } from './Components/container/signals/signals.component';

export const routes: Routes = [
    {path : '' , component : MainComponentComponent},
    {path : 'Login' , loadComponent : () => import('./Components/container/login/login.component').then(m => m.LoginComponent)},
    {path : 'About' , component : AboutComponent , canActivate: [AuthGuard]},
    {path : '**' , component : NotfoundComponent}
];
