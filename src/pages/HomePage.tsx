import React from 'react';

import Jumbotron from '../components/shared/jumbotron/Jumbotron';
import RestaurantList from '../components/RestaurantList';

export default function HomePage() {
  return (
    <>
      <Jumbotron />
      <RestaurantList />
    </>
  );
}
