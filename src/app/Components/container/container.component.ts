import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent,ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  providers:[CurrencyPipe]
})
export class ConatinerComponent{
 // name = 'Hitesh';
  addToCart:number = 0;
  product:{name:string, price:number,color:string,stock:number,Pimage:string} = {
    name: 'iPhone',
    price: 123,
    color:'Black',
    stock:10,
    Pimage:'/assets/Images/iphoneImg.jpg',
  };
  // onNameChange($event:any){
  //   this.name= $event.target.value;
  // }

  increaseCart(){
    if(this.addToCart < this.product.stock)
    this.addToCart++;
  }
  decreaseCart(){
    if(this.addToCart>0)
    this.addToCart--;
  }
}
