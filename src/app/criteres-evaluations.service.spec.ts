import { TestBed } from '@angular/core/testing';

import { CriteresEvaluationsService } from './criteres-evaluations.service';

describe('CriteresEvaluationsService', () => {
  let service: CriteresEvaluationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriteresEvaluationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
