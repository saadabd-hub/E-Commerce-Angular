import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'shopcart',
      loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'kategori',
      loadChildren: () => import('./kategori-produk/kategori-produk.module').then((m) => m.KategoriModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'login',
      loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'register',
      loadChildren: () => import('./signup/signup.module').then((m) => m.SignupModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'detail',
      loadChildren: () => import('./detail-produk/detail-produk.module').then((m) => m.DetailProdukModule),
    },
  ]),
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
