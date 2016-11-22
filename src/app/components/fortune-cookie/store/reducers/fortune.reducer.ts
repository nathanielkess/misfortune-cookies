import { FortuneActions } from './../actions/fortuns.actions';
import { Action } from '@ngrx/store';
import { Fortune } from './../../models/fortune';



export type FortuneState = Fortune;

const initialState: FortuneState = {
  id: 0,
  text: ''
}

export const fortuneReducer = (state = initialState, action:Action) => {
  
  switch(action.type){
    case FortuneActions.GET_FORTUNE_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }


}