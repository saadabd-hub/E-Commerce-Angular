import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

import { extract } from '../i18n/index';
import { CartComponent } from './cart.component';

const route: Routes = [
  Shell.childRoutes([{ path: 'shopcart', component: CartComponent, data: { title: extract('Shoping Cart') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class CartRouteModule {
  constructor() {}
}
