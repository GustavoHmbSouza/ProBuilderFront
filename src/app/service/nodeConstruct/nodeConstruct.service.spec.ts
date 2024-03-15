import { TestBed } from '@angular/core/testing';

import { ConstructService } from './nodeConstruct.service';

describe('ConstructService', () => {
  let service: ConstructService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
