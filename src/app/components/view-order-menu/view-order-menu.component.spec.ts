import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderMenuComponent } from './view-order-menu.component';

describe('ViewOrderMenuComponent', () => {
  let component: ViewOrderMenuComponent;
  let fixture: ComponentFixture<ViewOrderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrderMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
