import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShippingAccountsComponent } from './list-shipping-accounts.component';

describe('ListShippingAccountsComponent', () => {
  let component: ListShippingAccountsComponent;
  let fixture: ComponentFixture<ListShippingAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShippingAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListShippingAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
