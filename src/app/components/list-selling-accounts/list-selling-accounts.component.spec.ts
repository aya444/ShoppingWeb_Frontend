import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSellingAccountsComponent } from './list-selling-accounts.component';

describe('ListSellingAccountsComponent', () => {
  let component: ListSellingAccountsComponent;
  let fixture: ComponentFixture<ListSellingAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSellingAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSellingAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
