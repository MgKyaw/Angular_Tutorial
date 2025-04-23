import { TestBed } from '@angular/core/testing';

import { AnotherServiceService } from './another-service.service';

describe('AnotherServiceService', () => {
  let service: AnotherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
