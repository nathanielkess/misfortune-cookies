import { FortuneListState, fortuneListReducer } from './fortune-list.reducer';
import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
import {combineReducers} from '@ngrx/store';


export interface AppState {
  fortunes: FortuneListState
}

// export default compose(combineReducers)({
//   fortunes:fortuneListReducer
// });

export const allReducers = combineReducers({
  fortunes:fortuneListReducer
});