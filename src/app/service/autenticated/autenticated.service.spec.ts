import { TestBed } from '@angular/core/testing';

import { AutenticatedService } from './autenticated.service';

describe('AutenticatedService', () => {
  let service: AutenticatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
