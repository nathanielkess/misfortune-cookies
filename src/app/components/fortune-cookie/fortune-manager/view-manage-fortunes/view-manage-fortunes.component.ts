
import { Observable } from 'rxjs/Observable';
import { FortuneActions } from './../../store/actions/fortuns.actions';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { FortuneService } from './../../fortune.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-manage-fortunes',
  template: `
    <app-nav></app-nav>
    <div class="fortunes">
      <edit-fortune (save)="addNew($event)"></edit-fortune>
      <list-fortunes [fortunes]="fortunes | async" (delete)="deleteFortune($event)"></list-fortunes>
    </div>
  `,
  styles: [``]
})
export class ViewManageFortunesComponent implements OnInit {

  fortunes: Observable<any>;

  constructor(
    private store: Store<any>,
    private fortuneActions: FortuneActions,    
  ) { }

  ngOnInit() {
    this.store.dispatch(this.fortuneActions.loadFortunes());
    this.fortunes = this.store.select('fortunes');
  }

  addNew(fortune){
    //this.store.dispatch(this.fortuneActions.saveFortune(fortune));
    this.store.dispatch(this.fortuneActions.addFortune(fortune));
  }


  deleteFortune(fortune){
    this.store.dispatch(this.fortuneActions.deleteFortune(fortune));
  }
  

}
