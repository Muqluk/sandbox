import { ToDoItem } from './types';

export enum ActionTypes {
  FETCH_TODO_LIST_REQUEST = '@@TODO_DOMAIN/FETCH_TODO_LIST_REQUEST',
  FETCH_TODO_LIST_SUCCESS = '@@TODO_DOMAIN/FETCH_TODO_LIST_SUCCESS',
  FETCH_TODO_LIST_FAILURE = '@@TODO_DOMAIN/FETCH_TODO_LIST_FAILURE',
  ADD_TODO_LIST_ITEM = '@@TODO_DOMAIN/ADD_TODO_LIST_ITEM',
  REMOVE_TODO_LIST_ITEM = '@@TODO_DOMAIN/REMOVE_TODO_LIST_ITEM',
  SET_SELECTED_TODO_ITEM = '@@TODO_DOMAIN/SET_SELECTED_TODO_ITEM',
  CLEAR_SELECTED_TODO_ITEM = '@@TODO_DOMAIN/CLEAR_SELECTED_TODO_ITEM',
}

// #region Action Creator interfaces
export interface IFetchToDoListAction {
  type: typeof ActionTypes.FETCH_TODO_LIST_REQUEST;
}
export interface IFetchToDoListSuccessAction {
  type: typeof ActionTypes.FETCH_TODO_LIST_SUCCESS;
  payload: Array<ToDoItem>;
}
export interface IFetchToDoListFailureAction {
  type: typeof ActionTypes.FETCH_TODO_LIST_FAILURE;
  payload: string | string[] | null;
}
export interface IAddToDoItemAction {
  type: typeof ActionTypes.ADD_TODO_LIST_ITEM;
  payload: ToDoItem;
}
export interface IRemoveToDoItemAction {
  type: typeof ActionTypes.REMOVE_TODO_LIST_ITEM;
  payload: number;
}

export interface ISetSelectedToDoItem {
  type: typeof ActionTypes.SET_SELECTED_TODO_ITEM,
  payload: ToDoItem
}
export interface IClearSelectedToDoItem {
  type: typeof ActionTypes.CLEAR_SELECTED_TODO_ITEM,
}
// #endregion Action Creator interfaces

export type ToDoAction =
  | IFetchToDoListAction
  | IFetchToDoListSuccessAction
  | IFetchToDoListFailureAction
  | IAddToDoItemAction
  | IRemoveToDoItemAction
  | ISetSelectedToDoItem
  | IClearSelectedToDoItem;

export const FetchToDoList = (): IFetchToDoListAction => ({
  type: ActionTypes.FETCH_TODO_LIST_REQUEST,
});

export const FetchToDoListSuccess = (
  todoList: Array<ToDoItem>
): IFetchToDoListSuccessAction => ({
  type: ActionTypes.FETCH_TODO_LIST_SUCCESS,
  payload: todoList,
});

export const FetchToDoListFailure = (
  errors: string | string[] | null
): IFetchToDoListFailureAction => ({
  type: ActionTypes.FETCH_TODO_LIST_FAILURE,
  payload: errors,
});

export const AddToDoItem = (
  item: ToDoItem
): IAddToDoItemAction => ({
  type: ActionTypes.ADD_TODO_LIST_ITEM,
  payload: item,
});

export const RemoveToDoItem = (
  id: number
): IRemoveToDoItemAction => ({
  type: ActionTypes.REMOVE_TODO_LIST_ITEM,
  payload: id,
});

export const SetSelectedToDoItem = (
  toDoItem: ToDoItem,
): ISetSelectedToDoItem => ({
  type: ActionTypes.SET_SELECTED_TODO_ITEM,
  payload: toDoItem
});

export const ClearSelectedToDoItem = (
): IClearSelectedToDoItem => ({
  type: ActionTypes.CLEAR_SELECTED_TODO_ITEM,
});
