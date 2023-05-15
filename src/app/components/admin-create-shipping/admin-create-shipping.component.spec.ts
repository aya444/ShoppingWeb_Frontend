import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateShippingComponent } from './admin-create-shipping.component';

describe('AdminCreateShippingComponent', () => {
  let component: AdminCreateShippingComponent;
  let fixture: ComponentFixture<AdminCreateShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateShippingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
