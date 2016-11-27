import { Observable } from 'rxjs/Observable';
import { FortuneActions } from './../../store/actions/fortuns.actions';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'view-fortune-details',
  template: `
    <app-nav></app-nav>
    <section class="fortuneDetails">
      <edit-fortune [fortune]="fortune | async" (save)="save($event)"></edit-fortune>
      
      <a class="button link" [routerLink]="['/fortunes']" routerLinkActive="active">Back to Fortunes</a>
    </section>
  `,
  styles: [``]
})
export class ViewFortuneDetailsComponent implements OnInit {

  idSub: Subscription;
  fortune: Observable<any>;


  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private fortuneActions: FortuneActions
  ) { 
    this.fortune = this.store.select('fortune');
  }

  ngOnInit() {
    this.idSub = this.route.params.select<string>('id')
      .subscribe(id => {
          this.store.dispatch(this.fortuneActions.getFortune(id))
    });
  }

  save(fortune){
    console.log('saving: ', fortune);
    this.store.dispatch(this.fortuneActions.saveFortune(fortune));
  }


  ngOnDestroy() { 
     this.idSub.unsubscribe(); 
  }



}
