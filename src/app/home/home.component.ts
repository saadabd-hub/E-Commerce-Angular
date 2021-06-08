import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productIndex: Product[];

  page: number = 1;
  totalPage: number;
  totalRecord: number;
  pageSize: number;
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.loadIndexProduct();
  }
  loadIndexProduct() {
    const params = { page: this.page };
    this.homeService.getProducts(params).subscribe((products) => {
      this.productIndex = products;
    });
    this.homeService.getPagination(params).subscribe((response: any) => {
      this.totalPage = response.totalPage;
      this.totalRecord = response.totalRecord;
      this.pageSize = response.limit;
    });
  }

  changePageHandler(event: any): void {
    this.page = event;
    this.loadIndexProduct();
  }
}
