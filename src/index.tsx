import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Hello from './containers/Hello';
// import './index.css';

import LoginForm from './components/LoginForm';
import registerServiceWorker from './registerServiceWorker';

import { createBrowserHistory } from 'history';

import { applyMiddleware, compose, createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { EnthusiasmAction } from './actions/index';
import { IStoreState } from './types/index';
import { Provider } from 'react-redux';

export const history = createBrowserHistory();

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <LoginForm />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
