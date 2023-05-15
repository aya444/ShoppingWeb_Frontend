import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateSellerComponent } from './admin-create-seller.component';

describe('AdminCreateSellerComponent', () => {
  let component: AdminCreateSellerComponent;
  let fixture: ComponentFixture<AdminCreateSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
