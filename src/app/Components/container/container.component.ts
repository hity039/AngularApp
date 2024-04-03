import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit, ViewChild , inject} from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';
import { Router } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ScrollerComponent } from '../../Utility/scroller/scroller.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent,ProductListComponent,ProductDetailComponent,CommonModule,FeaturedBrandsComponent,AboutComponent,ContactComponent,ServicesComponent,ScrollerComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  providers:[CurrencyPipe]
})
export class ConatinerComponent{
  searchText:string = '';
  @ViewChild(ProductListComponent) productListComponent : ProductListComponent ;
  setSearchText(value:string){
    this.searchText = value;
  }
}
