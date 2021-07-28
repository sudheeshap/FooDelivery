import React from 'react';

import Jumbotron from '../components/jumbotron';
import RestaurantList from '../components/restaurant-list';

export default function Home() {
  return (
    <>
      <Jumbotron />
      <RestaurantList />
    </>
  );
}
