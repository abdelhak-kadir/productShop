import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})

export class ProductList {
  @Input() products: Product[] = [];  
  @Input() selectedId: number | null = null;

}
