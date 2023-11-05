/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CafestoreService } from './cafestore.service';

describe('Service: Cafestore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafestoreService]
    });
  });

  it('should ...', inject([CafestoreService], (service: CafestoreService) => {
    expect(service).toBeTruthy();
  }));
});
