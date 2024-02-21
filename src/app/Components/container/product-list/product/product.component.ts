import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import {Product} from '../../../../Models/Product'
import { HighlightDirective } from '../../../../CustomDirectives/highlight.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe,CommonModule,HighlightDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
constructor(currency : CurrencyPipe) {
   
}
  @Input()
  product?:Product;
}