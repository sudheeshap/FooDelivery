import { createAsyncThunk } from '@reduxjs/toolkit';

import { getRestaurantList } from '../../services/restaurant.service';

export const fetchRestaurants = createAsyncThunk(
  'restaurant/fetchRestaurants',
  async (search, { getState }) => {
    const restaurantList = await getRestaurantList(search);
    const state = getState();

    // Page changed
    if (search.currentPage > 1) {
      return {
        results: [...state.restaurant.entities, ...restaurantList.results],
        total: restaurantList.total,
      };
    }

    return restaurantList;
  },
);

export default fetchRestaurants;
