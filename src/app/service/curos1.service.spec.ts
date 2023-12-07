import { TestBed } from '@angular/core/testing';

import { Curos1Service } from './curos1.service';

describe('Curos1Service', () => {
  let service: Curos1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Curos1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
