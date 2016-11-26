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
    .map(this.fortuneActions.loadFortunesSuccess);

  @Effect() getFortune$ = this.update$
    .ofType(FortuneActions.GET_FORTUNE)
    .map<string>(action => action.payload)
    .switchMap((id) => this.fortuneService.getFortune(id))
    .map(this.fortuneActions.getFortuneSuccess);

  @Effect() saveFortune$ = this.update$
    .ofType(FortuneActions.SAVE_FORTUNE)
    .map(action => action.payload)
    .switchMap((fortune) => this.fortuneService.saveFortune(fortune))
    .map(this.fortuneActions.saveFortuneSuccess);

  @Effect() deleteFortne = this.update$
    .ofType(FortuneActions.DELETE_FORTUNE)
    .map(action => action.payload)
    .switchMap((fortune) => this.fortuneService.deleteFortune(fortune))
    .map(this.fortuneActions.deleteFortuneSuccess);  

}