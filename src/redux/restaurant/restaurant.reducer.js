import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: INITIAL_STATE.restaurant,
  reducers: {
    addFilter(state, action) {
      state.filters.push(action.payload.filter);
    },
    removeFilter(state, action) {
      return state.filters.filter((filter) => filter !== action.payload.filter);
    },
  },
});

export const { addFilter, removeFilter } = restaurantSlice.actions;

export default restaurantSlice.reducer;
