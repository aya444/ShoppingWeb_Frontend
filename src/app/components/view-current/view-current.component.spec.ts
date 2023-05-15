import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurrentComponent } from './view-current.component';

describe('ViewCurrentComponent', () => {
  let component: ViewCurrentComponent;
  let fixture: ComponentFixture<ViewCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCurrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
