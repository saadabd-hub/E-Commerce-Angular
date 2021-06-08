import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DetailProdukComponent } from './detail-produk.component';
import { DetailRouteModule } from './detail-route.module';

@NgModule({
  imports: [CommonModule, DetailRouteModule, TranslateModule],
  declarations: [DetailProdukComponent],
})
export class DetailProdukModule {}
