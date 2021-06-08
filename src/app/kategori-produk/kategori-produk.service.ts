import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Product } from '../interface/product.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class KategoriService {
  constructor(private http: HttpClient) {}

  private getIndexKategori(response: any) {
    return response.resultIndexCategory.data;
  }

  private getPaginationData(response: any) {
    return response.resultIndexCategory.pagination;
  }

  getProducts(kategori: string, page: string): Observable<Product[]> {
    let params = new HttpParams().set('jenis', kategori).set('page', page);
    return this.http
      .get<Product[]>(`${environment.serverUrl}product/kategori`, { params })
      .pipe(map(this.getIndexKategori));
  }
  getPagination(kategori: string, page: string) {
    let params = new HttpParams().set('jenis', kategori).set('page', page);
    return this.http
      .get<Product[]>(`${environment.serverUrl}product/kategori`, { params })
      .pipe(map(this.getPaginationData));
  }
}
