import { TestBed } from '@angular/core/testing';

import { ShreehariproductsService } from './shreehariproducts.service';

describe('ShreehariproductsService', () => {
  let service: ShreehariproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShreehariproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
