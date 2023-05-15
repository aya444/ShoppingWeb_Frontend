import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMenuFirstComponent } from './customer-menu-first.component';

describe('CustomerMenuFirstComponent', () => {
  let component: CustomerMenuFirstComponent;
  let fixture: ComponentFixture<CustomerMenuFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMenuFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMenuFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
