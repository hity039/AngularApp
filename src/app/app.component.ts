import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { TopHeaderComponent } from './Components/top-header/top-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConatinerComponent } from './Components/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,TopHeaderComponent,FontAwesomeModule,ConatinerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp';
}
