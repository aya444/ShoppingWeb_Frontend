import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSellingComponent } from './login-selling.component';

describe('LoginSellingComponent', () => {
  let component: LoginSellingComponent;
  let fixture: ComponentFixture<LoginSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSellingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
