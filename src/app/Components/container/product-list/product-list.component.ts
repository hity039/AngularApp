import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,CurrencyPipe,ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(currency : CurrencyPipe){

  }
   productList = [
    {
      id: 1,
      name: "Fire Boltt Ninja 2",
      img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
      seller: "Boltt Store",
      category: "Watch",
      stock:10,
      price:4400,
      description: `This is a limited edition Fire Boltt ninja watch. It comes with a built in blaster and can shoot fire at will.`,
      is_in_inventory:true,
      color:["Black","White", "Red"],
      size:["S","M","L"],
      discountedPrice : 2000
    },
  
    {
      id: 2,
      name: "Noise Pulse Go",
      img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
      amt: 1300,
      seller: "Noise Store",
      category: "Watch",
      stock:100,
      price:2000,
      description: `This is a small watch with noise pulse effect. It has a black leather strap and can be customized in different colors.`,
      is_in_inventory:false,
      color:["Black","White", "Red"],
      size:["S","M","L"],
    },
  
    {
      id: 3,
      name: "boAt Xtend Pro",
      img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
      amt: 2799,
      seller: "Rajesh Watchs",
      category: "Watch",
      stock:40,
      price:8000,
      description: `The Boat XTEND PRO is a stylish and comfortable watch that will keep you on track with its sleek design and water resistant features`,
      is_in_inventory:true,
      color:["Black","White", "Red"],
      size:["S","M","L"],
    },
    {
      id: 4,
      name: "Lenovo Tab M8",
      img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
      amt: 9270,
      seller: "Stonehenge Retail",
      category: "Tablets",
      stock:5,
      price:7000,
      description: `The Lenovo Tab M8 features a 10.1 inch Super AMOLED display with a resolution of 2346 x 1682 pixels and an aspect`,
      is_in_inventory:true,
      color:["Black","White", "Red"],
      size:["S","M","L"],
    },
    {
      id: 5,
      name: "Honor PAD X8",
      img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
      amt: 12999,
      seller: "Honor india",
      category: "Tablets",
      stock:20,
      price:6000,
      description: "This tablet has a large screen and runs on android os.",
      is_in_inventory:true,
      color:["Black","White", "Red"],
      size:["S","M","L"],
    },
  
    {
      id: 6,
      name: "IKALL N9 ",
      img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
      amt: 3999,
      seller: "IKALL Store",
      category: "Tablets",
      stock:10,
      price:5000,
      description: "The IKALL N9 is lightweight and waterproof with an IP68 rating for dust and salt resistance.",
      is_in_inventory:false,
      color:["Black","White", "Red"],
      size:["S","M","L"],
      discountedPrice : 2000
    },
  
    {
      id: 7,
      name: "Oppo Pad Air",
      img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
      amt: 15999,
      seller: "Oppo Store",
      category: "Tablets",
      stock:50,
      price:10000,
      description: "This tablet comes with a stylus for drawing or writing.",
      is_in_inventory:false,
      color:["Black","White", "Red"],
      size:["S","M","L"],
    },
    {
      id: 8,
      name: "Acer EK220Q",
      img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
      amt: 6249,
      seller: "Accer Store",
      category: "Monitors",
      stock:30,
      price:20000,
      description: "This monitor is perfect for watching movies or playing games.",
      is_in_inventory:false,
      color:["Black","White", "Red"],
      size:["S","M","L"],
      discountedPrice : 2000
    },
    {
      id: 9,
      name: "Samsung 24",
      img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
      amt: 9799,
      seller: "Samsung Store",
      category: "Monitors",
      stock:1,
      price:25000,
      description: "The largest screen in the series! Perfect for working from home.",
      is_in_inventory:true,
      color:["Black","White", "Red"],
      size:["S","M","L"],
    },
  
    {
      id: 10,
      name: "ZEBRONICS AC32FHD ",
      img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
      amt: 12799,
      seller: "ZEBRONICS Store",
      category: "Monitors",
      stock:18,
      price:5000,
      description: "Great for gaming and streaming!",
      is_in_inventory:false,
      color:["Black","White", "Red"],
      size:["S","M","L"],
      discountedPrice : 2000
    },
  ];
}
