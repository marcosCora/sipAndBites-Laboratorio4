import { TestBed } from '@angular/core/testing';

import { FoodManagementServiceService } from './food-management-service.service';

describe('FoodManagementServiceService', () => {
  let service: FoodManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
