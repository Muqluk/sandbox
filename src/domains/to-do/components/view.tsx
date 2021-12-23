import React from 'react';
import { ListBox } from '@common/components/list-box/list-box';
import { Toolbar } from './toolbar';
import { AddEditToDo } from './add-edit-todo';
import { IToDoClassProps } from '../types';

import './component.styles.scss';

export const ToDoView = ({
  toDoItems,
  loadingErrors,
  isLoading,
  selectedToDoItem,
  hasLoaded,
  fetchToDoList,
  setSelectedToDoItem,
  addToDoItem,
  clearSelectedToDo,
  removeToDoItem,
}: IToDoClassProps) => {
  const contentClass = `todo-content${hasLoaded ? '' : ' disabled'}`;
  return (
    <div className="todo-view">
      <h2>Hello from the ToDo Domain!</h2>
      <hr />
      <Toolbar
        fetchToDoList={fetchToDoList}
        isLoading={isLoading}
        loadingErrors={loadingErrors}
      />
      <div className={contentClass}>
        <ListBox
          Items={toDoItems}
          IdField="id"
          DisplayField="title"
          SelectedId={selectedToDoItem ? selectedToDoItem.id : -1}
          ItemSelected={setSelectedToDoItem}
        />
        <AddEditToDo
          currentSelection={selectedToDoItem}
          addToDoItem={addToDoItem}
          clearSelectedToDo={clearSelectedToDo}
          removeToDoItem={removeToDoItem}
        />
      </div>
    </div>
  );
};
