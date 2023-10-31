import { TestBed } from '@angular/core/testing';

import { MealSharingServiceService } from './meal-sharing-service.service';

describe('MealSharingServiceService', () => {
  let service: MealSharingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealSharingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
