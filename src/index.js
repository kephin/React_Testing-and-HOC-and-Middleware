import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import App from 'components/App';
import reducers from 'reducers';

ReactDOM.render(
  <Provider store={createStore(reducers, {}, applyMiddleware(reduxPromise))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
