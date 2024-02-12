import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import {Product} from '../../../../Models/Product'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
constructor(currency : CurrencyPipe) {
   
}
  @Input()
  product?:Product;
}