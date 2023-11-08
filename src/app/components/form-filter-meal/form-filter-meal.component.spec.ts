import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFilterMealComponent } from './form-filter-meal.component';

describe('FormFilterMealComponent', () => {
  let component: FormFilterMealComponent;
  let fixture: ComponentFixture<FormFilterMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFilterMealComponent]
    });
    fixture = TestBed.createComponent(FormFilterMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
