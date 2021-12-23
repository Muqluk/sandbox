import { ToDoItem } from '../state/reducer';
import {
  TLoading,
  TErrors,
  TItems,
  TCurrentItem,
  THasLoaded,
} from '../state/selectors';

export interface ISelectors {
  toDoItems: TItems;
  isLoading: TLoading;
  loadingErrors: TErrors;
  selectedToDoItem: TCurrentItem;
  hasLoaded: THasLoaded,
}

export interface IMapDispatchToProps {
  fetchToDoList: () => void;
  addToDoItem: (item: ToDoItem) => void;
  removeToDoItem: (id: number) => void;
}

export interface IToDoClassProps {
  toDoItems: ToDoItem[];
  isLoading: TLoading;
  hasLoaded: THasLoaded,
  loadingErrors: TErrors;
  selectedToDoItem: TCurrentItem;
  fetchToDoList: () => void;
  addToDoItem: (item: ToDoItem) => void;
  removeToDoItem: (id: number) => void;
  setSelectedToDoItem: (item: ToDoItem) => void;
  clearSelectedToDo: () => void;
}
export interface IToolbarProps {
  fetchToDoList: () => void;
  isLoading: TLoading;
  loadingErrors: TErrors;
}
