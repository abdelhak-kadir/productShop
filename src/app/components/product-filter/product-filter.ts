import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';        
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-product-filter',
  imports: [
    FormsModule,    // ← ngModel
    CurrencyPipe,   // ← pipe 'currency'
  ],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.scss',
})
export class ProductFilter {
  searchText = '';
  selectedCategory = 'toutes';
  maxPrice = 2000;
  
  categories = ['électronique', 'vêtements', 'maison', 'sport'];

  onReset() {
  this.searchText = '';
  this.selectedCategory = 'toutes';
  this.maxPrice = 2000;
}
get isDefault(): boolean {
  return !this.searchText && this.selectedCategory === 'toutes' && this.maxPrice === 2000;
}
}
