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
    <list-fortunes [fortunes]="fortunes | async"></list-fortunes>

  `,
  styles: [``]
})
export class ViewManageFortunesComponent implements OnInit {

  fortunes: Observable<any>;

  constructor(
    private store: Store<any>,
    private fortuneActions: FortuneActions,    
  ) {


   }

  ngOnInit() {
    
    
    this.store.dispatch(this.fortuneActions.loadFortunes());
    
    this.fortunes = this.store.select('fortunes');

    this.fortunes.subscribe(val => {
      console.log(val)
    });
  }

}
