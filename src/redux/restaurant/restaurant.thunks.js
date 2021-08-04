import { createAsyncThunk } from '@reduxjs/toolkit';

import DATA_RESTAURANTS from '../../data/restaurant.data';

// prettier-ignore
export const fetchRestaurants = createAsyncThunk(
  'restaurant/fetchRestaurants',
  // async (filters, sort, dispatch) => {
  async ({ filters }) => {
    const restaurants = await DATA_RESTAURANTS.filter((restaurant) => {
      if (filters.includes('offer') && restaurant.offer) {
        return true;
      }
      return false;
    });

    // console.log(filters, sort, restaurants, dispatch);

    return restaurants;
  },
);

export default fetchRestaurants;
