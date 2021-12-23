import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { ToDoReducer } from '@domains/to-do/state/reducer';

export const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  todoDomain: ToDoReducer!,
});
