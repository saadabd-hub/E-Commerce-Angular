import { TestBed } from '@angular/core/testing';

import { DetailProdukService } from './detail-produk.service';

describe('DetailProdukService', () => {
  let service: DetailProdukService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailProdukService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
