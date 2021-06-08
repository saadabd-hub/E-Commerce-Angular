import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Product } from '../interface/product.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DetailProdukService {
  constructor(private http: HttpClient) {}

  private getDetailProdu(response: any) {
    return response.resultDetail;
  }

  getDetail(id: string) {
    return this.http.get<Product>(`${environment.serverUrl}product/detail/${id}`).pipe(map(this.getDetailProdu));
  }
}
