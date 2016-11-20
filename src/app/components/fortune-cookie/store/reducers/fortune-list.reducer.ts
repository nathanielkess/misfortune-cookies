import { Action } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import { FortuneActions } from './../actions';
import { Fortune } from './../../models';


export type FortuneListState = Fortune[];

const initialState: FortuneListState = [];

export const fortuneListReducer = (state = initialState, action:Action ) => {

  switch(action.type){
    case FortuneActions.LOAD_FORTUNES_SUCCESS: {
      return action.payload;
    }
    default:{
      return state;
    }
  }

}

