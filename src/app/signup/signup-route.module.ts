import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '../i18n/index';
import { SignupComponent } from './signup.component';
import { Shell } from '@app/shell/shell.service';

const route: Routes = [
  Shell.childRoutes([{ path: 'register', component: SignupComponent, data: { title: extract('Shoping Cart') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class SignupRouteModule {
  constructor() {}
}
