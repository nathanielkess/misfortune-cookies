import { FortuneStore } from './../fortune.service.spec';
import { Store } from '@ngrx/store';
import { Fortune, FortuneService } from './../fortune.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fortune',
  template: `
    <h2>Fortune Component</h2>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./fortune.component.css']
})
export class FortuneComponent implements OnInit {

  fortunes: Observable<Array<Fortune>>;
  
  constructor(private fortuneService:FortuneService, private store: Store<FortuneStore>) { }

  ngOnInit() {
    this.fortunes = this.fortuneService.fortunes;
    this.fortuneService.loadFortunes();
  }

}
