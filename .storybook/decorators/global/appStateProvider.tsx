import React, { JSXElementConstructor, ReactElement } from 'react';
import { Provider } from 'react-redux';
import store, { history } from '@appState/store'; // eslint is just goofy. This works just fine.
import { ConnectedRouter } from 'connected-react-router';

interface p { }

export const AppState = (Story: JSXElementConstructor<p>): ReactElement => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Story />
    </ConnectedRouter>
  </Provider>
);