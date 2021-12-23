import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './state/actions';
import { ToDoItem } from './state/types';
import { ToDoView } from './components/view';

import {
  selectToDoItems,
  selectSelectedToDoItem,
  selectToDoErrors,
  selectToDoIsLoading,
  selectHasLoaded,
} from './state/selectors';

const ToDo = () => {
  const dispatch = useDispatch();
  const ToDoItemResult = useSelector(selectToDoItems);
  const loadErrors = useSelector(selectToDoErrors);
  const isLoading = useSelector(selectToDoIsLoading);
  const selectedToDoItem = useSelector(selectSelectedToDoItem);
  const hasLoaded = useSelector(selectHasLoaded);

  const handleGetTodos = () => {
    dispatch(Actions.FetchToDoList());
  };
  const handleSetSelected = (item: ToDoItem) => {
    dispatch(Actions.SetSelectedToDoItem(item));
  };
  const handleAddEdit = (item: ToDoItem) => {
    dispatch(Actions.AddToDoItem(item));
  };
  const handleRemoveToDo = (id: number) => {
    dispatch(Actions.RemoveToDoItem(id));
  };
  const handleClearSelected = () => {
    dispatch(Actions.ClearSelectedToDoItem());
  };

  return (
    <>
      <ToDoView
        toDoItems={ToDoItemResult}
        isLoading={isLoading}
        hasLoaded={hasLoaded}
        loadingErrors={loadErrors}
        selectedToDoItem={selectedToDoItem}
        addToDoItem={handleAddEdit}
        fetchToDoList={handleGetTodos}
        removeToDoItem={handleRemoveToDo}
        setSelectedToDoItem={handleSetSelected}
        clearSelectedToDo={handleClearSelected}
      />
    </>
  );
};

export default ToDo;
