import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-kategori',
  templateUrl: './card-kategori.component.html',
  styleUrls: ['./card-kategori.component.scss'],
})
export class CardKategoriComponent implements OnInit {
  kategoriList = [
    {
      id: 'gaming',
      img: '../../../assets/img/Gaming.jpg',
      categoryName: 'Gaming',
    },
    {
      id: 'komputer-laptop',
      img: '../../../assets/img/Komputer & Laptop.jpg',
      categoryName: 'Komputer & Laptop',
    },
    {
      id: 'handphone-tablet',
      img: '../../../assets/img/Handpjone & Tablet.jpg',
      categoryName: 'Handphone & Tablet',
    },
    {
      id: 'elektronik',
      img: '../../../assets/img/Electronik.jpg',
      categoryName: 'Elektronik',
    },
    {
      id: 'fashion-pria',
      img: '../../../assets/img/Fashion Pria.jpg',
      categoryName: 'Fashion Pria',
    },
    {
      id: 'fashion-wanita',
      img: '../../../assets/img/Fashion Wanita.jpg',
      categoryName: 'Fashion Wanita',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
