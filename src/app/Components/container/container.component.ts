import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent,ProductListComponent,ProductDetailComponent,CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  providers:[CurrencyPipe]
})
export class ConatinerComponent{
  searchText:string = '';
  setSearchText(value:string){
    this.searchText=value;
  }
}
