import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cart } from '../interface/cart.interface';
import { Product } from '../interface/product.interface';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getCart(userId: string): Observable<Cart[]> {
    return this.http.get(`${environment.serverUrl}cart/${userId}`).pipe(
      map((results: any) => {
        const cartItem: Cart[] = [];
        for (let items of results.resultData) {
          let itemExist = false;
          for (let index in cartItem) {
            if (cartItem[index].products.productName === items.products.productName) {
              cartItem[index].quantity++;
              itemExist = true;
              break;
            }
          }
          if (!itemExist) {
            cartItem.push(new Cart(items.products, items.quantity, items.totalPrice, items._id));
          }
        }
        return cartItem;
      })
    );
  }

  addCart(userId: string, cart: Cart) {
    return this.http.post(`${environment.serverUrl}cart/${userId}`, cart);
  }

  updateCart(cartId: string, cart: Cart) {
    return this.http.patch(`${environment.serverUrl}cart/${cartId}`, cart);
  }

  deleteCart(cartId: string) {
    return this.http.delete(`${environment.serverUrl}cart/${cartId}`);
  }
}
