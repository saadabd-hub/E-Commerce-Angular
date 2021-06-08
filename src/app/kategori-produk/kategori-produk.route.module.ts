import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

import { extract } from '../i18n/index';
import { KategoriProdukComponent } from './kategori-produk.component';

const route: Routes = [
  Shell.childRoutes([
    { path: 'kategori/:id', component: KategoriProdukComponent, data: { title: extract('Kategori') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class KategoriRouteModule {
  constructor() {}
}
