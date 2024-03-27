import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import {Product} from '../../../Models/Product';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { api_url } from '../../../Models/Config';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListService } from '../../../Services/product-list.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,CurrencyPipe,ProductComponent,FilterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers : [HttpClientModule,HttpClient]
})
export class ProductListComponent {
  constructor(currency : CurrencyPipe, private http : HttpClient){

  }
  productService : ProductListService = inject(ProductListService);
  selectedProduct:Product;
  productList : any = [];
  ngOnInit(){
  this.productService.getProductList().subscribe(data =>{
    this.productList = data;
  });
  console.log("Product List is : " + this.productList);
  
  }
  totalProducts  = this.productList.length;
  inStock = this.productList.filter(p => p.is_in_inventory).length;
  outOfstock = this.productList.filter(p=> !p.is_in_inventory).length;

  selectedFilter:string = 'all';

 @Input() searchText : string = '';

  onFilterChanged(value:string){
    this.selectedFilter = value;   
  }

}
