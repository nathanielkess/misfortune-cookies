import { Fortune } from './../../models';
import { Injectable} from '@angular/core';
import { Action} from '@ngrx/store';


@Injectable()
export class FortuneActions{

  static LOAD_FORTUNES = '[Fortune] Load Fortunes';
  loadFortunes():Action {
    return {
      type: FortuneActions.LOAD_FORTUNES
    }
  }

  static LOAD_FORTUNES_SUCCESS = '[Fortune] Load Fortunes Success';
  loadFortunesSuccess(fortunes):Action {
    return {
      type: FortuneActions.LOAD_FORTUNES_SUCCESS,
      payload: fortunes
    }
  }

  static GET_FORTUNE = '[Fortune] Get Fortune'
  getFortune(id):Action {
    return {
      type: FortuneActions.GET_FORTUNE,
      payload: id
    }
  }

  static GET_FORTUNE_SUCCESS = '[Fortune] Get Fortune Success'
  getFortuneSuccess(fortune):Action {
    return {
      type: FortuneActions.GET_FORTUNE_SUCCESS,
      payload: fortune
    }
  }




}