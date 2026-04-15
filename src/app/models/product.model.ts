export enum ProductCategory {
  ELECTRONIQUE = 'électronique',
  VETEMENT = 'vêtements',
  MAISON = 'maison',
  SPORT = 'sport'
}
export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  stock: number;
  rating: number;
  reviewCount: number;
  imageUrl?: string;
  description: string;
  tags: string[];
}
export enum StockStatus {
  EN_STOCK = 'en stock',
  STOCK_LIMITE = 'stock limité',
  RUPTURE = 'rupture'
}

export interface CartItem {
 product: Product;
 quantity: number;
}