/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CafestoreService } from './cafestore.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Cafestore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CafestoreService]
    });
  });

  it('should ...', inject([CafestoreService], (service: CafestoreService) => {
    expect(service).toBeTruthy();
  }));
});
