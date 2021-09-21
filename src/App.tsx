import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';
import RestaurantPage from './pages/RestaurantPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import DeliveryPage from './pages/DeliveryPage';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/restaurant/:slug">
            <RestaurantPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/delivery">
            <DeliveryPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
