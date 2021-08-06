import { createAsyncThunk } from '@reduxjs/toolkit';

import { getRestaurants } from '../../services/restaurant.service';

export const fetchRestaurants = createAsyncThunk(
  'restaurant/fetchRestaurants',
  async (searchConfig) => {
    const restaurants = await getRestaurants(searchConfig);

    return restaurants;
  },
);

export default fetchRestaurants;
