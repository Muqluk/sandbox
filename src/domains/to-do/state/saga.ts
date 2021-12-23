import axios, { AxiosResponse } from 'axios';
import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import sleep from '@utils/sleep';
import { ActionTypes, FetchToDoListFailure, FetchToDoListSuccess } from './actions';
import { ToDoItem } from './types';

const { FETCH_TODO_LIST_REQUEST } = ActionTypes;

const url = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => axios.get<ToDoItem[]>(url);

function* fetchTodoSaga() {
  try {
    const response: AxiosResponse<ToDoItem[]> = yield call(getTodos);
    // Simulating a long load time here... Obviously dont do this in production code
    sleep(500);
    yield put(FetchToDoListSuccess(response.data));
  } catch (e) {
    yield put(FetchToDoListFailure(e.message));
  }
}

function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_LIST_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
