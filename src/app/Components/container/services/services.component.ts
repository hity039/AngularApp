import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      title: 'Fast Shipping',
      description:
        'Get your order faster than ever with our lightning-fast shipping options.',
      imageUrl: '/assets/Images/FastShipping.png',
      ctaText: 'Learn More',
      ctaUrl: '/shipping'
    },
    {
      title: '24/7 Customer Support',
      description:
        'Our dedicated customer support team is available 24/7 to answer any questions or concerns you may have.',
      imageUrl: '/assets/Images/service.png',
      ctaText: 'Learn More',
      ctaUrl: 'mailto:rR9Q3@example.com'
    }
  ];
}
