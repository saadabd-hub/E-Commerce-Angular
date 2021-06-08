import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../interface/product.interface';
import { CartService } from '../cart/cart.service';
import { Cart } from '@app/interface/cart.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() productItems: Product;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addProductToCart() {
    const defaultQuantity = 1;
    const totalPrice = this.calculationPrice(defaultQuantity, this.productItems.price);
    const cart = new Cart(this.productItems, defaultQuantity, totalPrice);
    const payload = localStorage.getItem('Payload');
    this.cartService.addCart(payload, cart).subscribe((response) => {
      Swal.fire('Berhasil tambah cart');
    });
  }

  calculationPrice(quantity: number, price: number) {
    const total = Math.floor(quantity * price);
    return total;
  }
}
