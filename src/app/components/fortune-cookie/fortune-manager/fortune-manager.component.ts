import { FortuneStore } from './../fortune.service.spec';
import { Store } from '@ngrx/store';
import { FortuneService } from './../fortune.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fortune-manager',
  template: `
    <h2>Fortune Component</h2>
    <router-outlet></router-outlet>
  `,
  styles: [`
    
  `]
})
export class FortuneManagerComponent implements OnInit {

  //fortunes: Observable<Array<Fortune>>;
  
  //constructor(private fortuneService:FortuneService, private store: Store<FortuneStore>) { }
  constructor() {}
  
  ngOnInit() {
    // this.fortunes = this.fortuneService.fortunes;
    // this.fortuneService.loadFortunes();
  }

}
