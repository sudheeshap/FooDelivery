import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';
import { fetchRestaurants } from './restaurant.thunks';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: INITIAL_STATE.restaurant,
  reducers: {
    addFilter(state, action) {
      state.filters.push(action.payload.filter);
    },
    removeFilter(state, action) {
      state.filters = state.filters.filter(
        (filter) => filter !== action.payload.filter,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.entities = action.payload;
    });
  },
});

export const { addFilter, removeFilter } = restaurantSlice.actions;

export default restaurantSlice.reducer;
