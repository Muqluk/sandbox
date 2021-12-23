import { all, fork } from 'redux-saga/effects';
import ToDoSaga from '@domains/to-do/state/saga';

export function* rootSaga() {
  yield all([fork(ToDoSaga)]);
}
