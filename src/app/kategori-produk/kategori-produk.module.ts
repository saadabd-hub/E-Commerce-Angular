import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { KategoriRouteModule } from './kategori-produk.route.module';
import { KategoriProdukComponent } from './kategori-produk.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [CommonModule, KategoriRouteModule, TranslateModule, NgxPaginationModule],
  declarations: [KategoriProdukComponent],
})
export class KategoriModule {}
