import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus',
})
export class StockStatusPipe implements PipeTransform {
  transform(stock: number): string {
    if (stock === 0) return 'Rupture de stock';
    if (stock <= 10) return 'Stock limité';
    return 'En stock';
  }
}
