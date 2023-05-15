import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastComponent } from './view-past.component';

describe('ViewPastComponent', () => {
  let component: ViewPastComponent;
  let fixture: ComponentFixture<ViewPastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
