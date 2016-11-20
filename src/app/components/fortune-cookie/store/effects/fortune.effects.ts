import { FortuneService } from './../../fortune.service';
import { FortuneActions } from './../actions/fortuns.actions';
import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import 'rxjs/Rx';


@Injectable()
export class FortuneEffects {
  
  constructor(
    private update$:Actions,
    private fortuneActions:FortuneActions,
    private fortuneService:FortuneService
  ){}


  @Effect() loadFortunes$ = this.update$
    .ofType(FortuneActions.LOAD_FORTUNES)
    .switchMap(() => this.fortuneService.getFortunes())
    .map(fortunes => this.fortuneActions.loadFortunesSuccess(fortunes));


}