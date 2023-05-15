import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSoldProductsComponent } from './view-sold-products.component';

describe('ViewSoldProductsComponent', () => {
  let component: ViewSoldProductsComponent;
  let fixture: ComponentFixture<ViewSoldProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSoldProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSoldProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
