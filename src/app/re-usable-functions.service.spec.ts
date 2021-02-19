import { TestBed } from '@angular/core/testing';

import { ReUsableFunctionsService } from './re-usable-functions.service';

describe('ReUsableFunctionsService', () => {
  let service: ReUsableFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReUsableFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
