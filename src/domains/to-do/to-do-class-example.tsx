// #region Imports
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { AppDispatch, APP_STATE } from 'src/app-base/state/store';
import { ToDoItem } from 'src/domains/to-do/state/types';
import {
  AddToDoItem,
  FetchToDoList,
  RemoveToDoItem,
  SetSelectedToDoItem,
  ClearSelectedToDoItem,
} from 'src/domains/to-do/state/actions';
import {
  selectToDoIsLoading,
  selectToDoErrors,
  selectToDoItems,
  selectSelectedToDoItem,
  selectHasLoaded,
} from './state/selectors';
import { ISelectors, IMapDispatchToProps, IToDoClassProps } from './types';
import { ToDoView } from './components/view';
// #endregion Imports

class ToDoClass extends React.PureComponent<IToDoClassProps> {
  render() {
    const {
      addToDoItem,
      fetchToDoList,
      removeToDoItem,
      selectedToDoItem,
      toDoItems,
      isLoading,
      hasLoaded,
      loadingErrors,
      setSelectedToDoItem,
      clearSelectedToDo,
    } = this.props;

    return (
      <ToDoView
        toDoItems={toDoItems}
        isLoading={isLoading}
        hasLoaded={hasLoaded}
        loadingErrors={loadingErrors}
        selectedToDoItem={selectedToDoItem}
        addToDoItem={addToDoItem}
        fetchToDoList={fetchToDoList}
        removeToDoItem={removeToDoItem}
        setSelectedToDoItem={setSelectedToDoItem}
        clearSelectedToDo={clearSelectedToDo}
      />
    );
  }
}

// #region Redux-provided Props
const mapStateToProps = () => createStructuredSelector<APP_STATE, ISelectors>({
  toDoItems: selectToDoItems,
  isLoading: selectToDoIsLoading,
  loadingErrors: selectToDoErrors,
  selectedToDoItem: selectSelectedToDoItem,
  hasLoaded: selectHasLoaded,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchToDoList: () => dispatch(FetchToDoList()),
  addToDoItem: (item: ToDoItem) => dispatch(AddToDoItem(item)),
  removeToDoItem: (id: number) => dispatch(RemoveToDoItem(id)),
  setSelectedToDoItem: (item: ToDoItem) => dispatch(SetSelectedToDoItem(item)),
  clearSelectedToDo: () => dispatch(ClearSelectedToDoItem()),
});

const withConnect = connect<ISelectors, IMapDispatchToProps, IToDoClassProps, APP_STATE>(
  mapStateToProps,
  mapDispatchToProps,
);
// #endregion Redux-provided Props

export default compose(withConnect)(ToDoClass);
