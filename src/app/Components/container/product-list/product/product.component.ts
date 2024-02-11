import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  product:{id:number,name:string,img:string,seller:string,price:number,category:string,stock:number,description:string,is_in_inventory:boolean,color:string[],size:string[],discountedPrice?:number}= {
    id: 0,
    name: '',
    img: '',
    seller: '',
    price: 0,
    category: '',
    stock: 0,
    description: '',
    is_in_inventory: false,
    color: [],
    size: [],
    discountedPrice: 0
  }
}