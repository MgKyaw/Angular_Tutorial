import { TestBed } from '@angular/core/testing';

import { MyCalcService } from './my-calc.service';

describe('MyCalcService', () => {
  let service: MyCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
