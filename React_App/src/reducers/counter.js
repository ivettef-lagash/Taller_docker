import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { INCREMENT, DECREMENT } from '../actions/counter';

const INITIAL_STATE = {
  count: 0
};

const increment = produce(draft => {
  draft.count += 1;
});

const decrement = produce(draft => {
  draft.count -= 1;
});

const reducer = createReducer(INITIAL_STATE, {
  [INCREMENT]: increment,
  [DECREMENT]: decrement
});

export default reducer;
