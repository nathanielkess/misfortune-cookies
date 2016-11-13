import { Store, StoreModule } from '@ngrx/store';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FortuneService } from './fortune.service';


export interface Fortune {
  id: string;
  text: string;
}

export interface FortuneStore {
  fortunes: Fortune[]
}

describe('Service: Fortune', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FortuneService,
      ]
    });
  });

  it('should ...', inject([FortuneService], (service: FortuneService) => {
    expect(service).toBeTruthy();
  }));
});
