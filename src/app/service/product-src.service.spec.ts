import { TestBed } from '@angular/core/testing';

import { ProductSrcService } from './product-src.service';

describe('ProductSrcService', () => {
  let service: ProductSrcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSrcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
