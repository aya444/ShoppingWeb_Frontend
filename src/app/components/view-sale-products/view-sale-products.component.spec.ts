import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSaleProductsComponent } from './view-sale-products.component';

describe('ViewSaleProductsComponent', () => {
  let component: ViewSaleProductsComponent;
  let fixture: ComponentFixture<ViewSaleProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSaleProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSaleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
