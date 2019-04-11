import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { EnthusiasmAction } from './actions/index';
import { IStoreState } from './types/index';
import { Provider } from 'react-redux';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
