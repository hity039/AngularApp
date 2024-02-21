import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { SetBackground } from '../../../CustomDirectives/SetBackground.directive';
import { AppHoverDirective } from '../../../CustomDirectives/app-hover.directive';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,SetBackground,AppHoverDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() productListComp : ProductListComponent = undefined;
  product:Product ;
  testing : boolean = true;
  ngOnInit(){  
    console.log("Product:-" + this.productListComp.selectedProduct);
    this.product = this.productListComp.selectedProduct;
  }
}
