import { Product } from '../interface/product.interface';

export class Cart {
  _id?: string;
  products: Product;
  quantity: number;
  totalPrice: number;
  constructor(products: Product, quantity: any, totalPrice: any, id?: any) {
    this._id = id;
    this.products = products;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
  }
}
