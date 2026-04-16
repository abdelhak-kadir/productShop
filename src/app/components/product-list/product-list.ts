import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})

export class ProductList {
  @Input() products: Product[] = [];  
  @Input() selectedId: number | null = null;
  @Output() productSelected = new EventEmitter<Product>();
  @Output() addedToCart = new EventEmitter<Product>();
}
