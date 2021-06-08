import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CartComponent } from './cart.component';
import { CartRouteModule } from './cart-route.module';

@NgModule({
  imports: [CommonModule, CartRouteModule, TranslateModule],
  declarations: [CartComponent],
})
export class CartModule {}
