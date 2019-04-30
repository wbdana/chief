import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
// import { Route } from 'react-router';

// Containers
import CallbackContainer from './containers/CallbackContainer';

// Components
// import Callback from './components/Callback';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';

// import App from './App';

import registerServiceWorker from './registerServiceWorker';

import configureStore, { history } from './store';

const store = configureStore({
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
  user: {
    username: '',
  },
});

ReactDOM.render(
  <Provider store={store}>
    {/* TODO Move all this stuff to App */}
    <ConnectedRouter history={history}>
      {/* <App /> */}
      <Route path="/" component={Navbar} />
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/callback" component={CallbackContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
