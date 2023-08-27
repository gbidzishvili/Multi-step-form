import { TestBed } from '@angular/core/testing';

import { DataShearingService } from './data-shearing.service';

describe('DataShearingService', () => {
  let service: DataShearingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataShearingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
