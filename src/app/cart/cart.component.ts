import { Component, OnInit } from '@angular/core';
import { Cart } from '@app/interface/cart.interface';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalBelanja = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getDataCart();
  }

  getDataCart() {
    const payload = localStorage.getItem('Payload');
    this.cartService.getCart(payload).subscribe((result) => {
      this.cartItems = result;
      this.calculateTotalShop();
    });
  }

  increamentQuantity(cartId: any, body: any) {
    const updateIncreamentQuantity = {
      products: body.products._id,
      quantity: body.quantity + 1,
      totalPrice: body.totalPrice,
    };
    this.cartService.updateCart(cartId, updateIncreamentQuantity).subscribe((result: any) => {
      window.location.reload();
    });
  }
  decreamentQuantity(cartId: any, body: any) {
    if (body.quantity == 1) {
      this.deleteCart(cartId);
    }

    const updateDecreamentQuantity = {
      products: body.products._id,
      quantity: body.quantity - 1,
      totalPrice: body.totalPrice,
    };
    this.cartService.updateCart(cartId, updateDecreamentQuantity).subscribe((result: any) => {
      window.location.reload();
    });
  }

  deleteCart(cartId: string) {
    this.cartService.deleteCart(cartId).subscribe((response: any) => {
      window.location.reload();
    });
  }

  private calculateTotalShop() {
    this.cartItems.forEach((value) => {
      this.totalBelanja += value.quantity * value.products.price;
    });
  }
}
