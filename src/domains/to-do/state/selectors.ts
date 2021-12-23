import { createSelector } from '@reduxjs/toolkit';
import { APP_STATE } from 'src/app-base/state/store';
import { ToDoItem } from './types';
import { ToDoState } from './reducer';

export type ToDoErrors = string | string[] | null;
export type TLoading = ReturnType<typeof selectToDoIsLoading>;
export type TErrors = ReturnType<typeof selectToDoErrors>;
export type TItems = ReturnType<typeof selectToDoItems>;
export type TCurrentItem = ReturnType<typeof selectSelectedToDoItem>;
export type THasLoaded = ReturnType<typeof selectHasLoaded>;

const ToDoDomain = (state: APP_STATE) => (state.todoDomain as ToDoState);

export const selectToDoIsLoading = createSelector(
  ToDoDomain,
  (toDoState: ToDoState): boolean => toDoState.ToDoLoading,
);
export const selectToDoErrors = createSelector(
  ToDoDomain,
  (toDoState: ToDoState): ToDoErrors => toDoState.ToDoErrors,
);
export const selectToDoItems = createSelector(
  ToDoDomain,
  (toDoState: ToDoState): Array<ToDoItem> => toDoState.ToDoList,
);
export const selectSelectedToDoItem = createSelector(
  ToDoDomain,
  (toDoState: ToDoState) => toDoState.SelectedToDo,
);
export const selectHasLoaded = createSelector(
  ToDoDomain,
  (toDoState: ToDoState) => toDoState.HasLoaded,
);
