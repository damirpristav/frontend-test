import React, { Fragment, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Navigation from './components/Navigation';
import MobileMenu from './components/MobileMenu';
import Homepage from './components/Homepage';
import Contact from './components/Contact';

const App = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenuOpened(true);
  }

  const closeMobileMenuHandler = () => {
    setMobileMenuOpened(false);
  }

  return (
    <Fragment>
      <Navigation onMobileMenuOpen={mobileMenuHandler} />
      {mobileMenuOpened && <MobileMenu onClose={closeMobileMenuHandler} />}
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;