import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '@app/interface/product.interface';
import { DetailProdukService } from './detail-produk.service';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.component.html',
  styleUrls: ['./detail-produk.component.scss'],
})
export class DetailProdukComponent implements OnInit {
  detailProduk: Product;

  constructor(private detailService: DetailProdukService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getDetailProduk();
  }

  getDetailProduk() {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailService.getDetail(id).subscribe((produk) => {
      this.detailProduk = produk;
    });
  }
}
