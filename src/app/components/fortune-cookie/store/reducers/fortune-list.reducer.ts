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
    case FortuneActions.SAVE_FORTUNE_SUCCESS: {
      
      let index = state.reduce((output, curr) => { 
        if (curr.id == action.payload.id ) { 
          return output + 1 
        } 
      }, 0);

      console.log('save fortune success reducer');
      if(index >= 0){
        return [ 
          ...state.slice(0, index),
          action.payload,
          ...state.slice(index + 1)
        ]
      }
      return state;
    }
    case FortuneActions.ADD_FORTUNE_SUCCESS: {
      console.log('add reducer');
      return [ ...state, action.payload]
    }
    case FortuneActions.DELETE_FORTUNE_SUCCESS: {

      console.log('test');
      
      let newstate =  state.filter(frtn => {
        return frtn.id !== action.payload.id;
      });
      return newstate;

    }
    default:{
      return state;
    }
  }

}

