import React from 'react';
import { Provider } from 'react-redux';

import App from './app/container';
import configureStore from 'store/configure';

const store = configureStore();
window.store = store;


// Beginning of testing
window.getState = store.getState;
window.dispatch = store.dispatch;

export default () => (
  <Provider store={ store }>
    <App />
  </Provider>
);
