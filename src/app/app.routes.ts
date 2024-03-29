import { Routes } from '@angular/router';
import { LoginComponent } from './Components/container/login/login.component';
import { ProductDetailComponent } from './Components/container/product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './Components/container/featured-brands/featured-brands.component';
import { NotfoundComponent } from './Components/container/notfound/notfound.component';
import { ConatinerComponent } from './Components/container/container.component';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './Components/container/main-component/main-component.component';
import { AuthGuard } from './Services/authguard.service';

export const routes: Routes = [
    {path : '' , component : MainComponentComponent},
    {path : 'Login' , component : LoginComponent },
    {path : '**' , component : NotfoundComponent}
];
