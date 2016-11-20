import { Fortune } from './models/fortune';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Http} from '@angular/http';




@Injectable()
export class FortuneService {

  constructor(private http:Http){}

  getFortunes():Observable<Fortune[]> {

    console.log('fortuneService.getFortunes() called');

    return this.http.get('/api/fortunes')
      .map(res => res.json());
  }

  // private generateUUID(): string {
  //   return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
  //     .replace(/1|0/g, function() {
  //       return (0 | Math.random() * 16).toString(16);
  //     });
  // };

}
