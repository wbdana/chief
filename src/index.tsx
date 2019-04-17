import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
// import Hello from './containers/Hello';
// import './index.css';

import LoginForm from './components/LoginForm';
import registerServiceWorker from './registerServiceWorker';

// import { enthusiasm } from './reducers/index';
// import { EnthusiasmAction } from './actions/index';
// import { IStoreState } from './types/index';

import configureStore, { history } from './store';

// export const history = createBrowserHistory();

// const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript',
// });

const store = configureStore({
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});




ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
      
        <Route exact path="/" render={() => (<LoginForm />)} />
      

      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
