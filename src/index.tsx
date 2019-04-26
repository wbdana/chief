import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
// import { Route } from 'react-router';

// Components
import Callback from './components/Callback';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';

// import App from './App';

import registerServiceWorker from './registerServiceWorker';

import configureStore, { history } from './store';

const store = configureStore({
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* <App /> */}
      <Route path="/" component={Navbar} />
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/callback" component={Callback} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
