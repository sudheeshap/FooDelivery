import React from 'react';

import Jumbotron from '../components/Jumbotron';
import RestaurantList from '../components/RestaurantList';

export default function Home() {
  return (
    <>
      <Jumbotron />
      <RestaurantList />
    </>
  );
}
