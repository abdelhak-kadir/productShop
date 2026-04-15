import { Component, Input } from '@angular/core';
import { CurrencyPipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Product } from '../../models/product.model';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { StockStatusPipe } from '../../pipes/stock-status-pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe, UpperCasePipe, StockStatusPipe,  DiscountPipe],
  templateUrl: './product-card.html',
})
export class ProductCardComponent {
  @Input() product!: Product;
}