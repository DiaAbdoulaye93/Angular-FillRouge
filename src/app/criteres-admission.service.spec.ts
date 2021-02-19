import { TestBed } from '@angular/core/testing';

import { CriteresAdmissionService } from './criteres-admission.service';

describe('CriteresAdmissionService', () => {
  let service: CriteresAdmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriteresAdmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
