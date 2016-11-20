import { async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { FortuneActions } from './../../store/actions/fortuns.actions';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { FortuneService } from './../../fortune.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-manage-fortunes',
  template: `
    <p>view manage fortunes works!</p>

  `,
  styles: [``]
})
export class ViewManageFortunesComponent implements OnInit {

  fortunes: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private fortuneActions: FortuneActions,    
  ) {

    this.fortunes = this.store.select('fortunes');

   }

  ngOnInit() {

    this.fortunes.subscribe(val => {
      console.log(val)
    });
  }

}
