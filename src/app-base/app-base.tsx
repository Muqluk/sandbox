import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import store, { history } from 'src/app-base/state/store';
import { ConnectedRouter } from 'connected-react-router';
import Layout from './layout';

const AppBase = (): ReactElement => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout />
    </ConnectedRouter>
  </Provider>
);

export default AppBase;
