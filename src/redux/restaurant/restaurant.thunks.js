import { createAsyncThunk } from '@reduxjs/toolkit';

import { listRestaurants } from '../../services/restaurant.service';

/**
 * Fetch restaurants for the search config
 */
export const fetchRestaurants = createAsyncThunk(
  'restaurant/fetchRestaurants',
  async (search, { getState }) => {
    const restaurantList = await listRestaurants(search);
    const state = getState();

    // Page changed
    if (search.currentPage > 1) {
      return {
        models: [...state.restaurant.entities, ...restaurantList.models],
        total: restaurantList.total,
      };
    }

    return restaurantList;
  },
);

export default fetchRestaurants;
