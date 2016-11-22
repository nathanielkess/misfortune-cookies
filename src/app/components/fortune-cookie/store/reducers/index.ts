import { FortuneListState, fortuneListReducer } from './fortune-list.reducer';
import { FortuneState, fortuneReducer } from './fortune.reducer';
import '@ngrx/core/add/operator/select';
import {combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';


export interface AppState {
  fortunes: FortuneListState,
  fortune: FortuneState
}

// export default compose(combineReducers)({
//   fortunes:fortuneListReducer
// });

export const allReducers = combineReducers({
  fortune:fortuneReducer,
  fortunes:fortuneListReducer,
});