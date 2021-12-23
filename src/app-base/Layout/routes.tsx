import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ToDoClass from 'src/domains/to-do/to-do-class-example';
import ToDoFunctional from 'src/domains/to-do/to-do-functional-example';
import { Home } from './home';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/todo-func" component={ToDoFunctional} />
    <Route path="/todo-class" component={ToDoClass} />
  </Switch>
);
