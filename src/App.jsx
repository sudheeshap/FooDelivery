import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Restaurant from './pages/restaurant';
import Header from './components/header';
import Footer from './components/footer';

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
