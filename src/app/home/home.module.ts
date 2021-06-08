import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Angulartics2Module } from 'angulartics2';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from '../card/card.component';
import { CardKategoriComponent } from '../card/card-kategori/card-kategori.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [CommonModule, TranslateModule, Angulartics2Module, NgxPaginationModule, HomeRoutingModule],
  declarations: [HomeComponent, CarouselComponent, CardComponent, CardKategoriComponent],
})
export class HomeModule {}
