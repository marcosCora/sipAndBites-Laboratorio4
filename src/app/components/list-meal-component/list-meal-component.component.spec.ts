import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMealComponentComponent } from './list-meal-component.component';

describe('ListMealComponentComponent', () => {
  let component: ListMealComponentComponent;
  let fixture: ComponentFixture<ListMealComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMealComponentComponent]
    });
    fixture = TestBed.createComponent(ListMealComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
