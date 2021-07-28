import React from 'react';

import Cart from '../components/cart';
import ProductList from '../components/product-list';

import RestaurantInfo from '../components/restaurant-info';

export default function Restaurant() {
  return (
    <section className="main-container">
      <section className="container-left">
        <RestaurantInfo />
        <ProductList />
      </section>
      <section className="container-right">
        <Cart />
      </section>
    </section>
  );
}
