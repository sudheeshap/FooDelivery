import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Restaurant from './pages/Restaurant';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/restaurant/:slug">
            <Restaurant />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
