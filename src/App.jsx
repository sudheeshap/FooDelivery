import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Restaurant from './pages/Restaurant';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/restaurant/:slug">
            <Restaurant />
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
