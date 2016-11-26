import { Fortune } from './models/fortune';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Http} from '@angular/http';




@Injectable()
export class FortuneService {

  constructor(private http:Http){}

  getFortunes():Observable<Fortune[]> {
    return this.http.get('/api/fortunes')
      .map(res => res.json());
  }

  getFortune(id):Observable<Fortune> {
    return this.http.get('/api/fortunes/' + id)
      .map(res => {
        return res.json();
      });
  }

  saveFortune(fortune) {
    if(fortune.id === 0){
      return this.http.post('/api/fortunes', fortune)
        .map(res => res.json());
    } else {
      return this.http.put('/api/fortunes/' + fortune.id, fortune)
        .map(res => res.json());
    }
  }

  deleteFortune(fortune){
    return this.http.delete('/api/fortunes/' + fortune.id)
      .map(res => res.json());
  }

  

  // private generateUUID(): string {
  //   return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
  //     .replace(/1|0/g, function() {
  //       return (0 | Math.random() * 16).toString(16);
  //     });
  // };

}
