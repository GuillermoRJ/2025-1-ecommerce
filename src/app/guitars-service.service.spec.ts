import { TestBed } from '@angular/core/testing';

import { GuitarsServiceService } from './guitars-service.service';

describe('GuitarsServiceService', () => {
  let service: GuitarsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
