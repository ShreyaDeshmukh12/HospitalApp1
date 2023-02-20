import { TestBed } from '@angular/core/testing';

import { HospitalOperationsService } from './hospital-operations.service';

describe('HospitalOperationsService', () => {
  let service: HospitalOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
