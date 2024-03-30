import { Routes } from '@angular/router';
import { LoginComponent } from './Components/container/login/login.component';
import { NotfoundComponent } from './Components/container/notfound/notfound.component';
import { MainComponentComponent } from './Components/container/main-component/main-component.component';
import { AboutComponent } from './Components/container/about/about.component';

export const routes: Routes = [
    {path : '' , component : MainComponentComponent},
    {path : 'Login' , component : LoginComponent },
    {path : 'About' , component : AboutComponent },
    {path : '**' , component : NotfoundComponent}
];
