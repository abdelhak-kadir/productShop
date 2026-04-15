import { Component, signal } from '@angular/core';
import { CartItem, Product, ProductCategory } from './models/product.model';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe } from '@angular/common';
import { ProductFilter } from './components/product-filter/product-filter';
import { ProductCardComponent } from './components/product-card/product-card';


@Component({
  selector: 'app-root',
  imports: [ ProductFilter, ProductCardComponent,
     DecimalPipe,    // pipe 'number'
    CurrencyPipe,   // pipe 'currency'
    DatePipe,       // pipe 'date'
    JsonPipe,       // pipe 'json'
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  today = new Date();
  protected readonly title = signal('productShop');
  products: Product[] = [
 {  id: 1, 
    name: 'Smartphone XPro 15', 
    brand: 'TechVision', 
    category: ProductCategory.ELECTRONIQUE,
    price: 799, 
    originalPrice: 999, 
    stock: 15, 
    rating: 4.6, 
    reviewCount: 342,
    description: 'Le dernier flagship avec 5G.',
    tags: ['5G', 'OLED', '128Go', 'NFC', 'Rapide'] },
  { id: 2, name: 'T-Shirt Sport', brand: 'SportWear',
    category: ProductCategory.VETEMENT, price: 29,   stock: 8, rating: 4.2, reviewCount: 89,
    description: 'T-shirt respirant.', tags: ['sport'] },
  { id: 3, name: 'Lampe LED', brand: 'LumiHome',
    category: ProductCategory.MAISON, price: 49, originalPrice: 65,
    stock: 0, rating: 4.0, reviewCount: 55,
    description: 'Lampe bureau LED.', tags: ['LED'] },
  { id: 4, name: 'Vélo Électrique', brand: 'EcoMove',
    category: ProductCategory.SPORT, price: 1299, originalPrice: 1499,
    stock: 3, rating: 4.8, reviewCount: 210,
    description: 'Vélo urbain 80km.', tags: ['électrique'] },
  { id: 5, name: 'Casque ProSound', brand: 'SoundMax',
    category: ProductCategory.ELECTRONIQUE, price: 199, originalPrice: 249,
    stock: 20, rating: 4.5, reviewCount: 178,
    description: 'Casque ANC Bluetooth.', tags: ['Bluetooth'] },
];
selectedProduct: Product | null = null;
cart: CartItem[] = [];
get cartTotal(): number {
  return this.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

}
