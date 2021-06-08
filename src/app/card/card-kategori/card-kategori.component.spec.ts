import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKategoriComponent } from './card-kategori.component';

describe('CardKategoriComponent', () => {
  let component: CardKategoriComponent;
  let fixture: ComponentFixture<CardKategoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardKategoriComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
