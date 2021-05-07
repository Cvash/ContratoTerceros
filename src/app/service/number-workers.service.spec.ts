import { TestBed } from '@angular/core/testing';

import { NumberWorkersService } from './number-workers.service';

describe('NumberWorkersService', () => {
  let service: NumberWorkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberWorkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
