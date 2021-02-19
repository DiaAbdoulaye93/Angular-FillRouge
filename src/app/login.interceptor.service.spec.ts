import { TestBed } from '@angular/core/testing';

import { Login.InterceptorService } from './login.interceptor.service';

describe('Login.InterceptorService', () => {
  let service: Login.InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Login.InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
