import * as React from 'react';
import { Route, Switch } from 'react-router';

// Components
import Callback from './components/Callback';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path="/" render={() => (<Navbar />)} />
        <Route exact path="/" render={() => (<LoginForm />)} />
        <Route path="/callback" render={() => (<Callback />)} />
      </Switch>
    );
  }
}

export default App;
