import { TestBed } from '@angular/core/testing';

import { GrpcompetencesService } from './grpcompetences.service';

describe('GrpcompetencesService', () => {
  let service: GrpcompetencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrpcompetencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
