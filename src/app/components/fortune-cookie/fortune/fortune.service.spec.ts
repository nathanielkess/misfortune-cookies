/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FortuneService } from './fortune.service';

describe('Service: Fortune', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FortuneService]
    });
  });

  it('should ...', inject([FortuneService], (service: FortuneService) => {
    expect(service).toBeTruthy();
  }));
});
