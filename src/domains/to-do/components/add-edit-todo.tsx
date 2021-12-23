import React, { useEffect, useState } from 'react';
import { Button, Checkbox, TextInput } from '@common/components';
import { ToDoItem } from '../state/types';

import './component.styles.scss';

type AddEditToDoProps = {
  currentSelection: ToDoItem | null,
  clearSelectedToDo: () => void,
  addToDoItem: (item: ToDoItem) => void;
  removeToDoItem: (id: number) => void
}

export const AddEditToDo = ({
  currentSelection,
  clearSelectedToDo,
  removeToDoItem,
  addToDoItem,
}: AddEditToDoProps) => {
  const [originalToDo, setOriginalToDo] = useState<ToDoItem>({
    userId: -1,
    id: -1,
    title: '',
    completed: false,
  });
  const [currentToDo, setCurrentToDo] = useState<ToDoItem>({
    userId: -1,
    id: -1,
    title: '',
    completed: false,
  });

  const [undoDisabled, setUndoDisabled] = useState<boolean>(true);
  const [clearDisabled, setClearDisabled] = useState<boolean>(true);
  const [saveDisabled, setSaveDisabled] = useState<boolean>(true);
  const [deleteDisabled, setDeleteDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (
      currentToDo.title !== originalToDo.title
      || currentToDo.completed !== originalToDo.completed
    ) {
      setUndoDisabled(false);
    }
    setClearDisabled(false);
    setSaveDisabled(currentToDo.title.length === 0);
  }, [currentToDo.title, currentToDo.completed]);

  useEffect(() => {
    const originalSelection = {
      userId: currentSelection?.userId || -1,
      id: currentSelection?.id || -1,
      title: currentSelection?.title || '',
      completed: currentSelection?.completed || false,
    };
    setOriginalToDo(originalSelection);
    setCurrentToDo(originalSelection);
    setDeleteDisabled(currentSelection === null);
    setClearDisabled(currentSelection === null);
  }, [currentSelection]);

  const titleChanged = (title: string) => {
    const updatedToDo = {
      ...currentToDo,
      title,
    };
    setCurrentToDo(updatedToDo);
  };

  const completedChanged = (completed: boolean) => {
    setCurrentToDo({ ...currentToDo, completed });
  };

  const deleteSelectedToDo = () => {
    removeToDoItem(currentToDo.id);
  };

  const saveToDoHandler = () => {
    addToDoItem(currentToDo);
    undoChangesHandler();
    setClearDisabled(true);
  };

  const undoChangesHandler = () => {
    setCurrentToDo(originalToDo);
    setUndoDisabled(true);
  };

  return (
    <div className="add-edit-todo">
      <div className="todo-display">
        <TextInput
          label="title"
          value={currentToDo?.title}
          onChange={titleChanged}
        />
        <Checkbox
          label="Complete?"
          checked={currentToDo?.completed}
          checkChanged={completedChanged}
        />
      </div>
      <div className="todo-actions">
        <Button disabled={undoDisabled} text="Undo Changes" onClick={undoChangesHandler} />
        <Button disabled={clearDisabled} text="Clear Selection" onClick={clearSelectedToDo} />
        <Button disabled={saveDisabled} text="Save" onClick={saveToDoHandler} />
        <Button disabled={deleteDisabled} text="Delete" onClick={deleteSelectedToDo} />
      </div>
    </div>
  );
};
