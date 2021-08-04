import { createAsyncThunk } from '@reduxjs/toolkit';

import DATA_RESTAURANTS from '../../data/restaurant.data';

// prettier-ignore
export const fetchRestaurants = createAsyncThunk(
  'restaurant/fetchRestaurants',
  async ({ filters }) => {
    const restaurants = await DATA_RESTAURANTS.filter((restaurant) => {
      if (filters.includes('offer')) {
        return !!restaurant.offer;
      }

      return true;
    });

    return restaurants;
  },
);

export default fetchRestaurants;
