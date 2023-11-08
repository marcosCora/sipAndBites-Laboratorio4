import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFilterDrinkComponent } from './form-filter-drink.component';

describe('FormFilterDrinkComponent', () => {
  let component: FormFilterDrinkComponent;
  let fixture: ComponentFixture<FormFilterDrinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFilterDrinkComponent]
    });
    fixture = TestBed.createComponent(FormFilterDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
