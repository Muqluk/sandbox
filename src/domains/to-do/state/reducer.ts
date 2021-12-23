// Chance only used to generate a random # for a userId...
import { Chance } from 'chance'; // eslint-disable-line
// Chance only used to generate a random # for a userId...

import { ToDoAction, ActionTypes } from './actions';
import { ToDoItem } from './types';

export type ToDoState = {
  readonly ToDoLoading: boolean,
  readonly ToDoList: Array<ToDoItem>,
  readonly ToDoErrors: string | string[] | null,
  readonly SelectedToDo: ToDoItem | null,
  readonly HasLoaded: boolean,
};

const initialState: ToDoState = Object.freeze({
  ToDoList: [],
  ToDoErrors: null,
  ToDoLoading: false,
  SelectedToDo: null,
  HasLoaded: false,
});

export const ToDoReducer = (
  state: ToDoState = initialState,
  action: ToDoAction
): ToDoState => {
  switch (action.type) {
    case ActionTypes.FETCH_TODO_LIST_REQUEST:
      return {
        ...state,
        ToDoLoading: true,
      };
    case ActionTypes.FETCH_TODO_LIST_SUCCESS:
      return {
        ...state,
        HasLoaded: true,
        ToDoLoading: false,
        ToDoList: action.payload,
      };
    case ActionTypes.FETCH_TODO_LIST_FAILURE:
      return {
        ...state,
        ToDoLoading: false,
        ToDoErrors: action.payload,
      };
    case ActionTypes.ADD_TODO_LIST_ITEM: {
      let newState: ToDoState;
      const newItem: ToDoItem = action.payload;

      const { id } = newItem;

      if (id === -1) { // adding a new item
        const indexes = state.ToDoList.length;
        const newId = state.ToDoList[indexes - 1].id + 1;
        const chance = new Chance();
        newState = {
          ...state,
          ToDoList: [
            ...state.ToDoList,
            {
              ...newItem,
              id: newId,
              userId: chance.integer({ min: 1, max: 15 }),
            }
          ],
        };
      } else { // updating an existing item
        newState = {
          ...state,
          SelectedToDo: null,
          ToDoList: state.ToDoList.map(
            (item: ToDoItem) => (item.id !== action.payload.id ? item : action.payload)
          ),
        };
      }
      return newState;
    }
    case ActionTypes.REMOVE_TODO_LIST_ITEM:
      return {
        ...state,
        SelectedToDo: null,
        ToDoList: state.ToDoList.filter(
          (item: ToDoItem) => item.id !== action.payload
        ),
      };
    case ActionTypes.SET_SELECTED_TODO_ITEM:
      return {
        ...state,
        SelectedToDo: action.payload
      };
    case ActionTypes.CLEAR_SELECTED_TODO_ITEM:
      return {
        ...state,
        SelectedToDo: null,
      };
    default:
      return state;
  }
};
