import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Navigation from './components/Navigation';

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <h1>Homepage</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact</h1>
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;