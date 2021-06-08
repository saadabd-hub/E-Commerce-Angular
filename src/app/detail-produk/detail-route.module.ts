import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

import { extract } from '../i18n/index';
import { DetailProdukComponent } from './detail-produk.component';

const route: Routes = [
  Shell.childRoutes([{ path: 'detail/:id', component: DetailProdukComponent, data: { title: extract('Kategori') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class DetailRouteModule {
  constructor() {}
}
