import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import list from './list';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ router, list });

  return rootReducer;
}

export default createRootReducer;
