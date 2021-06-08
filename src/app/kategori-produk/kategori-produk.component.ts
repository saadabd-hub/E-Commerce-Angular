import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { KategoriService } from './kategori-produk.service';
import { Product } from '../interface/product.interface';
import { CartService } from '@app/cart/cart.service';
import { Cart } from '@app/interface/cart.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kategori-produk',
  templateUrl: './kategori-produk.component.html',
  styleUrls: ['./kategori-produk.component.scss'],
})
export class KategoriProdukComponent implements OnInit {
  productKategori: Product[];
  kategori: string;
  page: number = 1;
  totalPage: number;
  totalRecord: number;
  pageSize: number;

  constructor(
    private kategoriService: KategoriService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getKategori();
  }

  getKategori() {
    let kategori = this.route.snapshot.paramMap.get('id');
    this.kategoriService.getProducts(kategori, this.page.toString()).subscribe((kategoriProduk) => {
      this.productKategori = kategoriProduk;
      this.kategori = kategori;
    });
    this.kategoriService.getPagination(kategori, this.page.toString()).subscribe((response: any) => {
      this.totalPage = response.totalPage;
      this.totalRecord = response.totalRecord;
      this.pageSize = response.limit;
    });
  }

  changePageHandler(event: any): void {
    this.page = event;
    this.getKategori();
  }

  addToCart(body: any) {
    const defaultQuantity = 1;
    const userId = localStorage.getItem('Payload');
    const totalPrice = this.calculationPrice(defaultQuantity, body.price);
    const cart = new Cart(body, defaultQuantity, totalPrice);
    this.cartService.addCart(userId, cart).subscribe((response) => {
      Swal.fire('Berhasil tambah cart!');
    });
  }

  private calculationPrice(quantity: number, price: number) {
    const total = quantity * price;
    return total;
  }
}
