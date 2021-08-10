import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  listRestaurants,
  loadRestaurant,
} from '../../services/restaurant.service';
import { fetchMenuGroups } from '../menu-group/menu-group.thunks';

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

/**
 * Fetch restaurant by slug
 */
export const fetchRestaurant = createAsyncThunk(
  'restaurant/fetchRestaurant',
  async (slug, { dispatch }) => {
    const restaurant = await loadRestaurant(slug);

    // Fetch menu groups or the selected restaurant
    dispatch(fetchMenuGroups());

    return restaurant;
  },
);
