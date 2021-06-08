import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Product } from '../interface/product.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  private getIndexData(response: any) {
    return response.resultIndex.data;
  }

  private getPaginationData(response: any) {
    return response.resultIndex.pagination;
  }

  getProducts(params: any): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${environment.serverUrl}product?`, { params })
      .pipe(map(this.getIndexData));
  }

  getPagination(params: any): any {
    return this.http.get(`${environment.serverUrl}product?`, { params }).pipe(map(this.getPaginationData));
  }
}
