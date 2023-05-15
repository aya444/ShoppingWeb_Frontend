import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingMenuComponent } from './selling-menu.component';

describe('SellingMenuComponent', () => {
  let component: SellingMenuComponent;
  let fixture: ComponentFixture<SellingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
